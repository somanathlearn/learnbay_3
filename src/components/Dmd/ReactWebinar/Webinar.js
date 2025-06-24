import Image from "next/image";
import Link from "next/link";
import styles from "./Webinar.module.css";

function Webinar() {
  return (
    <div>
      <div className={styles.webmain}>
        <h2>
          <span className={styles.greentext}>REGISTER </span>FOR WEBINAR
        </h2>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/webinar_desktop.webp"
          width={1200}
          height={390}
          loading="lazy"
        />

        <div className={styles.btn}>
          <Link
            href="https://zoom.us/webinar/register/WN_OXUJK-K6SoWhu-ncQGLtrw"
            target="_blank"
          >
            <button>Register Now</button>
          </Link>
        </div>
      </div>

      <div className={styles.webmainmbl}>
        <h2>
          <span className={styles.greentext}>REGISTER </span>WEBINAR
        </h2>
        <div className="">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/webinar_mobile.webp"
            width={350}
            height={350}
            loading="lazy"
            className={styles.imgmbl}
          />

          <div className={styles.btn}>
            <Link
              href="https://zoom.us/webinar/register/WN_OXUJK-K6SoWhu-ncQGLtrw"
              target="_blank"
            >
              <button>Register Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webinar;
