// import React, { useState, useEffect } from "react";
// import styles from "./FourthSection.module.css";
// import Image from "next/image";
// import Form from "../../Form/Form";
// import Popup from "../../Popup/Popup";
// import { FaDownload } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import Button from "../../Global/Button/Button";
// // import {
// //   PlacementDS,
// //   PlacementFS,
// //   PlacementMasters,
// // } from "./FourthSectionData";

// function FourthSection({
//   dataScience,
//   dataScienceCounselling,
//   placementData,
//   titleCourse,
//   brochureLink,
//   redirectDS,
// }) {
//   const [popups, setPopups] = useState(false);
//   const [popupsB, setPopupsB] = useState(false);

//   const popupShow = () => {
//     setPopups(true);
//   };
//   const popupShowD = () => {
//     setPopupsB(true);
//   };

//   const [placementArray, setPlacementArray] = useState(placementData);
//   // useEffect(() => {
//   //   if (redirectDS) {
//   //     setPlacementArray(PlacementDS);
//   //   }
//   //   if (redirectFS) {
//   //     setPlacementArray(PlacementFS);
//   //   }
//   //   if (redirectMasters) {
//   //     setPlacementArray(PlacementMasters);
//   //   }

//   //   let width = window.innerWidth;
//   //   if (width < 481) {
//   //     setMobile(true);
//   //   }
//   // }, [redirectDS, redirectFS, redirectMasters]);
//   return (
//     <>
//       <Popup trigger={popupsB} setTrigger={setPopupsB} className="popupModal">
//         <div className="leftPopup">
//           <div
//             className="whiteP"
//             style={{ width: "350px", height: "400px" }}
//           ></div>
//         </div>
//         <div className="RightPopup">
//           <h5>Download Report</h5>
//           <Form
//             dataScience={dataScience}
//             dataScienceCounselling={dataScienceCounselling}
//             downloadBrochure
//             upSkillingHide={true}
//             titleCourse={titleCourse}
//             brochureLink={brochureLink}
//           />
//         </div>
//       </Popup>
//       <section className={styles.Features}>
//         <div>
//           <h4 className={styles.infop}>300+ placement and hiring partners</h4>
//           <div className={styles.FeatureWrap}>
//             <div className={styles.LeftWrap}>
//               {placementArray.map((data, index) => {
//                 const { id, img, desc } = data;
//                 return redirectDS ? (
//                   <div className={styles.ParaWrap} key={index}>
//                     <div className={`${styles.number} imgWrapper `}>
//                       <Image
//                         src={img}
//                         width={30}
//                         height={60}
//                         alt="serial no."
//                       />
//                     </div>
//                     <span>{desc}</span>
//                   </div>
//                 ) : (
//                   ""
//                 );
//               })}
//             </div>
//             <div className={`${styles.RightWrap}  `}>
//               <div className="imgWrapper">
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Placement+Logos+No+Map.png"
//                   width="480"
//                   height="360"
//                   alt="Learnbay placement partners"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.btnWrap}>
//           <div onClick={setPopupsB}>
//             <Button
//               className={styles.fillBtn}
//               text=" Download Placement Report"
//               passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default FourthSection;

import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import styles from "./FourthSection.module.css";
// import {
//   PlacementDS,
//   PlacementFS,
//   PlacementMasters,
// } from "./FourthSectionData";
function FourthSection({
  dataScience,
  dataScienceCounselling,
  placementData,
  titleCourse,
  brochureLink,
  redirectDS,
}) {
  const [popups, setPopups] = useState(false);
  const [popupsB, setPopupsB] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const popupShowD = () => {
    setPopupsB(true);
  };
  const [placementArray, setPlacementArray] = useState(placementData);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
  // useEffect(() => {
  //   if (redirectDS) {
  //     setPlacementArray(PlacementDS);
  //   }
  //   if (redirectFS) {
  //     setPlacementArray(PlacementFS);
  //   }
  //   if (redirectMasters) {
  //     setPlacementArray(PlacementMasters);
  //   }
  //   let width = window.innerWidth;
  //   if (width < 481) {
  //     setMobile(true);
  //   }
  // }, [redirectDS, redirectFS, redirectMasters]);
  return (
    <>
      <Popup trigger={popupsB} setTrigger={setPopupsB} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Report</h5>
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            downloadBrochure
            upSkillingHide={true}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <section className={styles.Features}>
        <div>
          <h4 className={styles.infop}>Our Students Work in</h4>
          <div className={styles.FeatureWrap}>
            {/* <div className={styles.LeftWrap}>
              {placementArray.map((data, index) => {
                const { id, img, desc } = data;
                return redirectDS ? (
                  <div className={styles.ParaWrap} key={index}>
                    <div className={`${styles.number} imgWrapper `}>
                      <Image
                        src={img}
                        width={30}
                        height={60}
                        alt="serial no."
                      />
                    </div>
                    <span>{desc}</span>
                  </div>
                ) : (
                  ""
                );
              })}
            </div> */}
            <div className={`${styles.RightWrap}  `}>
              <div className="imgWrapper">
                {mobile ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/company-mobile.png"
                    width="1200"
                    height="250"
                    alt="Learnbay placement partners"
                    loading="lazy"
                  />

                ) : (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/work-place.png"
                    width="1200"
                    height="250"
                    alt="Learnbay placement partners"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.btnWrap}>
          <div onClick={setPopupsB}>
            <Button
              className={styles.fillBtn}
              text=" Download Placement Report"
              passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
            />
          </div>
        </div> */}
      </section>
    </>
  );
}
export default FourthSection;
