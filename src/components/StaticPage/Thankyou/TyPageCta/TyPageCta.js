import dynamic from "next/dynamic";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "./TyPageCta.module.css";
const Button = dynamic(() => import("../../../Global/Button/Button"));

const TyPageCta = ({ heading, para, brochureLink }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.contentWrap}>
          <h4>{heading}</h4>
        </div>
        <a href={brochureLink}>
          <Button text="Download Syllabus" passIcon={<AiOutlineDownload />} />
        </a>
      </div>
    </div>
  );
};

export default TyPageCta;
