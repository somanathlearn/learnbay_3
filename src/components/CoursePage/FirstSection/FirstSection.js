import PopupContent from "@/components/Global/PopupContent/PopupContent";
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";
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
  IBMGl,
  fresher,
  upSkillingHide,
  highlightWord,
  DSWolf,
  backgorunimg,
  isSpecialPage,
  isGuwahati,
  backgroundImage,
  IIT,
  GEnAi,
  microsoftOnly,
  DSAFresherHeadContent,
  DSA,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
      />
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <FirstContent
        dataScience={dataScience}
        softwareBtnHide={softwareBtnHide}
        firstToparaImg={firstToparaImg}
        firstHeading={firstHeading}
        FirstRightImg={FirstRightImg}
        firstTopPara={firstTopPara}
        dataScienceCounselling={dataScienceCounselling}
        DSWolf={DSWolf}
        cityParaCont={cityParaCont}
        setPopups={setPopups}
        setVideo={setVideo}
        videoId={videoId}
        thumbnailUrl={thumbnailUrl}
        youtubeEmbedUrl={youtubeEmbedUrl}
        S3RightImage={S3RightImage}
        animationHide={animationHide}
        interstedInHide={interstedInHide}
        upSkillingHide={upSkillingHide}
        topHide={topHide}
        IBMGl={IBMGl}
        fresher={fresher}
        isSpecialPage={isSpecialPage}
        backgorunimg={backgorunimg}
        isGuwahati={isGuwahati}
        backgroundImage={backgroundImage}
        ibmOnly={ibmOnly}
        highlightWord={highlightWord}
        GEnAi={GEnAi}
        IIT={IIT}
        microsoftOnly={microsoftOnly}
        DSA={DSA}
        DSAFresherHeadContent={DSAFresherHeadContent}
      />
    </>
  );
}
export default React.memo(FirstSection);
