import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ProjectSection.module.css";
const ProjectContent = dynamic(() => import("./ProjectContent"));
const PopupContent = dynamic(() =>
  import("../../Global/PopupContent/PopupContent")
);

const ProjectSection = ({
  ids,
  dataScience,
  radio,

  dataScienceCounselling,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <section className={styles.container} id="ProjectLab">
      <PopupContent
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
        radio={radio}
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
      />
      <ProjectContent ids={ids} />
    </section>
  );
};

export default ProjectSection;
