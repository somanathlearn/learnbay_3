import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useState } from "react";
import FirstSectionContent from "./FirstSectionContent";

function FirstSection({
  dataScience,
  fullStack,
  dataScienceCounselling,
  titleCourse,
  brochureLink,
  interstedInHide,
  brochurePdf
}) {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        dataScience={dataScience}
        downloadBrochure
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        heading="Download Syllabus"
      />

      <FirstSectionContent
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        fullStack={fullStack}
        setPopups={setPopups}
      />
    </>
  );
}

export default FirstSection;
