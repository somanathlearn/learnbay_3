import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import styles from "./slug.module.css";
import Footer from "@/components/Global/Footer/Footer";
import dynamic from "next/dynamic";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { Children, useEffect, useState, useRef, useCallback, useMemo } from "react";
import Head from "next/head";
import Navbar from "@/components/Global/Navbar/Navbar";
import { TestingCourseData } from "@/CityData/testingData/testingData";

const RelatedCourses = dynamic(() => import("@/components/testingComponent/RelatedCourses/RelatedCourses"));
const ReactMarkdown = dynamic(() => import("react-markdown"));

const extractText = (children) =>
  Children.toArray(children)
    .map((child) =>
      typeof child === "string"
        ? child
        : typeof child?.props?.children === "string"
        ? child.props.children
        : Array.isArray(child?.props?.children)
        ? child.props.children.join("")
        : ""
    )
    .join("")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const Blog = ({ postData, nextPost }) => {
  const router = useRouter();
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tocRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 861);
    checkScreen();
    const debouncedResize = debounce(checkScreen, 150);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isTOCOpen &&
        tocRef.current &&
        !tocRef.current.contains(event.target)
      ) {
        setIsTOCOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isTOCOpen]);

  const markdownComponents = useMemo(
    () => ({
      h1: ({ node, ...props }) => {
        const id = extractText(props.children);
        return <h1 id={id} {...props} />;
      },
      h2: ({ node, ...props }) => {
        const id = extractText(props.children);
        return <h2 id={id} {...props} />;
      },
      h3: ({ node, ...props }) => {
        const id = extractText(props.children);
        return <h3 id={id} {...props} />;
      },
    }),
    []
  );

  if (router.isFallback) return <div>Loading...</div>;
  if (!postData) return <div>404 - Blog Post Not Found</div>;

  const canonicalURL = `https://www.learnbay.co${router.asPath}`;

  return (
    <>
      <Head>
        <title>{postData.Stitle || "Learnbay blogs"}</title>
        <meta name="description" content={postData.description || "Welcome to Learnbay Blogs"} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description || "Welcome to Learnbay Blogs"} />
        <meta name="keywords" content={postData.keywords || "default, keywords"} />
        <meta property="og:image" content={postData.image} />
        <meta name="twitter:card" content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/blogs/blogcover.webp" />
        <link rel="canonical" href={canonicalURL} />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>

      <Navbar popup dataScience interstedInHide />

      <div className={styles.blogPage}>
        <div className={styles.blogHeader} style={{ backgroundImage: `url(${postData.image})` }}></div>

        <div className={styles.metaContainer}>
          <h1 className={styles.blogTitle}>{postData.title}</h1>
          <div className={styles.metaInfo}>
            <span className={styles.author}>By: {postData.author}</span>
            <span className={styles.readTime}>Read Time : {postData.readTime}</span>
            <span className={styles.date}>Publish on: {postData.date}</span>
          </div>
        </div>

        <div className={styles.blogContainer}>
          <div ref={tocRef} className={`${styles.sidebar} ${isMobile ? styles.mobileSidebar : ""}`}>
            {isMobile && (
              <button className={styles.toggleButton} onClick={() => setIsTOCOpen(!isTOCOpen)}>
                {isTOCOpen ? "Hide Table of Contents ▲" : "Show Table of Contents ▼"}
              </button>
            )}

            {(!isMobile || isTOCOpen) && (
              <div className={styles.tocContent}>
                <h2>Table of Contents</h2>
                <ul>
                  {postData.headings.map((heading, index) => (
                    <li key={index}>
                      <a href={`#${heading.id}`}>{heading.text} <hr className={styles.hr}/> </a>
                    </li>

                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.blogContent}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
              {postData.content}
            </ReactMarkdown>

            {nextPost && (
              <div className={styles.nextPost}>
                <Link href={`/blog/${nextPost.slug}`}>Next Blog: {nextPost.title}</Link>
              </div>
            )}
          </div>
        </div>

        <RelatedCourses relatedCourses={TestingCourseData[0].relatedCourses} />
        <Footer />
      </div>
    </>
  );
};

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

export async function getStaticPaths() {
  const blogDirectory = path.join(process.cwd(), "src/blog");
  const fileNames = fs.readdirSync(blogDirectory);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, "") },
    }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const blogDirectory = path.join(process.cwd(), "src/blog");
    const filePath = path.join(blogDirectory, `${params.slug}.md`);

    if (!fs.existsSync(filePath)) return { notFound: true };

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const headings = [];
    content.replace(/^(#{1,6})\s+(.*)$/gm, (match, p1, p2) => {
      const rawText = p2.replace(/[*_~`]/g, "");
      const id = rawText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      headings.push({ id, text: rawText, level: p1.length });
      return match;
    });

    const postData = {
      title: data.title || "Untitled",
      date: data.date || "Unknown Date",
      author: data.author || "Author",
      image: data.image || "/default-image.jpg",
      Stitle: data.Stitle || data.title || "Untitled",
      description: data.description || "Default description",
      readTime: data.readTime || "Read time",
      keywords: data.keywords || "default, keywords",
      content,
      headings,
    };

    const fileNames = fs.readdirSync(blogDirectory);
    const currentIndex = fileNames.findIndex((file) => file.replace(/\.md$/, "") === params.slug);

    let nextPost = null;
    if (currentIndex !== -1 && currentIndex + 1 < fileNames.length) {
      const nextFile = fileNames[currentIndex + 1];
      const nextContent = fs.readFileSync(path.join(blogDirectory, nextFile), "utf8");
      const nextData = matter(nextContent).data;
      nextPost = { slug: nextFile.replace(/\.md$/, ""), title: nextData.title || "Next Post" };
    }

    return { props: { postData, nextPost } };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
}

export default Blog;
