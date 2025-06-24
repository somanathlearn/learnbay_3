import PopupContent from "@/components/Global/PopupContent/PopupContent";
import React, { useState } from "react";
import FirstContent from "./FirstContent";

function FirstSection({
  dataScience,
  softwareBtnHide,
  idss,
  interstedInHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  titleCourse,
  brochureLink,
  brochurePdf,
  dataScienceCounselling,
  ibmOnly,
  cityParaCont,
  thumbnailUrl,
  videoId,
  youtubeEmbedUrl,
  S3RightImage,
  animationHide,
  topHide,
  Domain,
  upSkillingHide,
  DomainInput,
}) {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        DomainInput={DomainInput}
      />
      <FirstContent
        dataScience={dataScience}
        softwareBtnHide={softwareBtnHide}
        firstToparaImg={firstToparaImg}
        firstHeading={firstHeading}
        FirstRightImg={FirstRightImg}
        firstTopPara={firstTopPara}
        dataScienceCounselling={dataScienceCounselling}
        ibmOnly={ibmOnly}
        cityParaCont={cityParaCont}
        setPopups={setPopups}
        videoId={videoId}
        thumbnailUrl={thumbnailUrl}
        youtubeEmbedUrl={youtubeEmbedUrl}
        S3RightImage={S3RightImage}
        animationHide={animationHide}
        interstedInHide={interstedInHide}
        Domain={Domain}
        upSkillingHide={upSkillingHide}
        topHide={topHide}
        DomainInput={DomainInput}
      />
    </>
  );
}
export default React.memo(FirstSection);
