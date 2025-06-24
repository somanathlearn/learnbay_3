import Head from "next/head";
import Footer from "../components/Global//Footer/Footer";
import EnrollPage from "@/components/EnrollPage/EnrollPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay - Enroll Now</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Explore Learnbay's Enroll Now. Experience interactive learning with expert instructors. Enroll today for a hands-on educational journey."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/demo" />
      </Head>
      <main>
        <EnrollPage />
      </main>
    </div>
  );
}
