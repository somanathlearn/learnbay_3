// Emipopup.js

import React from "react";
import Styles from "./EMipopup.module.css";

function Emipopup({
  closeEmiPopup,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown1,
  iitGuwatiGen,
}) {
  return (
    <div>
      <div className={Styles.Emipopup}>
        <div className={Styles.CloseButton} onClick={closeEmiPopup}>
          {/* You can include a close button here if needed */}
        </div>

        <div className={Styles.Main}>
          <div className={Styles.containers}>
            <h2>EMI Options</h2>

            <div className={Styles.firstrow}>
              <p className={Styles.para}>Duration</p>
              <p className={Styles.para}>Total Amount</p>
              <p className={Styles.para}>Monthly Payments</p>
            </div>

            <div className={Styles.secrow}>
              <p className={Styles.greencol}>{emiType}</p>

              <h4 className={Styles.month}>{duration2}</h4>
              <h4 className={Styles.Amount}>
                {totalAmount1} <p className={Styles.gst}>+18% GST</p>
              </h4>
              <h4 className={Styles.Amount}>{monthlyPayment2}</h4>

              {iitGuwatiGen ? (
                <p className={`${Styles.greenDown} ${Styles.orange}`}>{greenDown1}</p>
              ) : (
                <p className={Styles.greenDown}>
                  Standard Interest Rates Applicable
                </p>
              )}
              <h4 className={Styles.month}>{duration1}</h4>
              <h4 className={Styles.Amount}>
                {totalAmount2} <p className={Styles.gst}>+18% GST</p>
              </h4>
              <h4 className={Styles.Amount}>{monthlyPayment1}</h4>
            </div>
          </div>
        </div>
        <div className={Styles.Main}>
          <div className={Styles.containers}>
            {/*     
            <div className={Styles.secrow}>
              <p className={Styles.greencol}>{emiType}</p>

              <h4 className={Styles.month}>{duration2}</h4>
              <h4 className={Styles.Amount}>{totalAmount1} <p className={Styles.gst}>+18% GST</p></h4>
              <h4 className={Styles.Amount}>{monthlyPayment2}</h4>

              <p className={Styles.greenDown}>Standard Interest Rates Applicable</p>
              <p className={Styles.greenDown}>{greenDown1}</p>
           

              <h4 className={Styles.month}>{duration1}</h4>
              <h4 className={Styles.Amount}>{totalAmount2} <p className={Styles.gst}>+18% GST</p></h4>
              <h4 className={Styles.Amount}>{monthlyPayment1}</h4>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emipopup;
