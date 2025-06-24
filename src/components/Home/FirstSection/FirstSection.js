import dynamic from "next/dynamic";
import React, { useState } from "react";
const PopupContent = dynamic(() =>
  import("../../Global/PopupContent/PopupContent")
);
const FirstSectionContent = dynamic(() => import("./FirstSectionContent"));

const FirstSection = ({
  dataScience,
  radio,
  dataScienceCounselling,
  interstedInHide,
  idss,
  btnHide,
  dataScienceGeneric,
}) => {
  const [popups, setPopups] = useState(false);
  return (
    <>
      <PopupContent
        dataScience={dataScience}
        radio={radio}
        dataScienceCounselling={dataScienceCounselling}
        dataScienceGeneric={dataScienceGeneric}
        popups={popups}
        setPopups={setPopups}
        interstedInHide={interstedInHide}
        heading="Apply For Counselling"
      />

      <FirstSectionContent btnHide={btnHide} setPopups={setPopups} />
    </>
  );
};
export default React.memo(FirstSection);
