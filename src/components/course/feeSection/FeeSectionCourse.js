import { useState } from "react";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import FeeContent from "./feeContent";

const FeeSection = ({
  Fee,
  dataScience,
  WeekdayDate,
  WeekendDate,
  WeekdayTime,
  WeekendTime,
  CutFee,
  dataScienceCounselling,
  FeeEmi,
  weekday,
  weekend,
  weekdaybatch,
  weekendbatch,
  interstedInHide,
  devopfee,
  adsHide,
  iitGuwatiGen,
  hybridFee,
  hybridEmi,

  emiPopupProps,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <div id="Fees">
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
      />
      <FeeContent
        Fee={Fee}
        adsHide={adsHide}
        dataScience={dataScience}
        WeekdayDate={WeekdayDate}
        WeekendDate={WeekendDate}
        WeekdayTime={WeekdayTime}
        WeekendTime={WeekendTime}
        CutFee={CutFee}
        FeeEmi={FeeEmi}
        weekday={weekday}
        weekend={weekend}
        weekdaybatch={weekdaybatch}
        weekendbatch={weekendbatch}
        setPopups={setPopups}
        devopfee={devopfee}
        emiPopupProps={emiPopupProps}
        emiType={emiType}
        duration1={duration1}
        totalAmount1={totalAmount1}
        monthlyPayment1={monthlyPayment1}
        greenDown1={greenDown1}
        duration2={duration2}
        totalAmount2={totalAmount2}
        monthlyPayment2={monthlyPayment2}
        greenDown2={greenDown2}
        iitGuwatiGen={iitGuwatiGen}
        hybridFee={hybridFee}
        hybridEmi={hybridEmi}
      />
    </div>
  );
};

export default FeeSection;
