import React, { useState } from "react";
import axios from "axios";
import styles from "./EnrollPage.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";

const EnrollPopup = ({
  onClose,
  name,
  email,
  phone,
  selectedProduct,
  selectedCoupon,
  totalPrice,
  paymentType,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [submittingForm, setSubmittingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleFormSubmit = () => {
    setSubmittingForm(true);
    const formData = {
      date: selectedDate,
      time: selectedTime,
      name: name,
      email: email,
      phone: phone,
      selectedProduct: selectedProduct.name,
      selectedCoupon: selectedCoupon,
      totalPrice: totalPrice,
      paymentType: paymentType,
      url: router.asPath,
    };

    axios
      .post(
        "https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92",
        formData
      )
      .then((response) => {
        console.log("Form submitted successfully to external endpoint!");
        router.push(`/loan-process?course=${selectedProduct.name}&amount=${totalPrice}&date=${selectedDate}&time=${selectedTime}`);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setFormSubmitted(true);
        setSubmittingForm(false);
      });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          Close[x]
        </button>
        <div className={styles.contPopup}>
          <div className={styles.mainPopup}>
            <h4 className={styles.head}>No Cost Finance</h4>
            <div className={styles.Point}>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>No Cost EMI option</p>
              </div>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>No processing fees</p>
              </div>
            </div>
          </div>
          <div className={styles.mainPopup}>
            <h4 className={styles.head}>Documents Required</h4>
            <div className={styles.Point}>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>Original Aadhar card</p>
              </div>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>Original PAN card</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/loansimg+(1).webp"
              alt="arrow"
              width={726}
              height={119}
              className={styles.ImageLoan}
              loading="lazy"
              quality={40}
            />
          </div>
          <div>
            <form>
          <p className={styles.LabelPopup}>Select a slot for our finance team to contact you.</p>
              <div className={styles.divFlexPopup}>
                <div className={styles.formGroupPopup}>
                  <label className={styles.LabelPopup}>Date</label>
                  <input
                    className={styles.formControlPopup}
                    type="date"
                    value={selectedDate}
                    required={true}
                    onChange={handleDateChange}
                  />
                </div>
                <div className={styles.formGroupPopup}>
                  <label className={styles.LabelPopup}>Time</label>
                  <input
                    className={styles.formControlPopup}
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    required={true}
                  />
                </div>
                <input
                  type="hidden"
                  id="url"
                  name="url"
                  value={router.asPath}
                />
              </div>
              {formSubmitted ? (
                <div className={styles.successMessage}>
                  Form submitted successfully! We will get back to you soon.
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    console.log("Checking if fields are empty...");
                    if (!selectedTime || !selectedDate || submittingForm) {
                      console.log("Fields are empty. Showing alert...");
                      alert("Please fill in all the required fields.");
                      return;
                    }
                    setSubmittingForm(true);
                    console.log(
                      "Fields are filled. Proceeding with checkout..."
                    );
                    handleFormSubmit();
                  }}
                  className={`${styles.button} ${
                    (!selectedTime || !selectedDate) && !submittingForm
                      ? styles.disabled
                      : ""
                  }`}
                  disabled={!selectedTime || !selectedDate || submittingForm}
                  style={{
                    width: "auto",
                    margin: "30px 0px 0px 0px",
                    opacity: submittingForm
                      ? 0.5
                      : !selectedTime || !selectedDate
                      ? 0.5
                      : 1,
                  }}
                >
                  {submittingForm ? "Submitting..." : "Start My Application"}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollPopup;
