import React from "react";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../Popup/Popup"));
const Form = dynamic(() => import("../Form/Form"));

const PopupContent = ({
  dataScience,
  radio,
  dataScienceCounselling,
  popups,
  setPopups,
  heading,
  downloadBrochure,
  fullStack,
  upSkillingHide,
  titleCourse,
  brochureLink,
  brochurePdf,
  dataScienceGeneric,
  interstedInHide,
  Domain,
  DomainInput,
  DSADemoSession,
  dsaPopup,
  setDSAPopup,
  genAISelectOption,
}) => {
  return (
    <Popup
      trigger={popups}
      setTrigger={setPopups}
      className="popupModal"
      popup={true}
    >
      <div className="leftPopup">
        <div
          className="whiteP"
          style={{ width: "340px", height: "400px" }}
        ></div>
      </div>
      <div className="RightPopup">
        <h5>{heading}</h5>
        <Form
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          radio={radio}
          downloadBrochure={downloadBrochure}
          fullStack={fullStack}
          titleCourse={titleCourse}
          brochureLink={brochureLink}
          brochurePdf={brochurePdf}
          dataScienceGeneric={dataScienceGeneric}
          upSkillingHide={upSkillingHide}
          interstedInHide={interstedInHide}
          Domain={Domain}
          DomainInput={DomainInput}
          DSADemoSession={DSADemoSession}
          popup={popups}
          setTrigger={setPopups}
          dsaPopup={dsaPopup}
          setDSAPopup={setDSAPopup}
          genAISelectOption={genAISelectOption}
        />
      </div>
    </Popup>
  );
};

export default React.memo(PopupContent);
