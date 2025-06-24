import Image from "next/image";
import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import axios from "axios";
import styles from "./EnrollPage.module.css";
import EnrollPopup from "./EnrollPagePopup";
import { useRouter } from "next/router";

const products = [
  { name: "Data Science and AI Master Certification Program", price: 129000 },
  { name: "Advanced AI and ML Certification Program", price: 110000 },
  {
    name: "Data Science & AI Certification Program For Managers and Leaders",
    price: 110000,
  },
  { name: "Business Analytics Master Certification Program", price: 90000 },
  { name: "Advanced Data Science and AI Certification", price: 99000 },
  { name: "Data Analytics Certification Program", price: 80000 },
  { name: "HR Analytics Certification Program", price: 75000 },
  { name: "Marketing Analytics Certification Program", price: 75000 },
  {
    name: "Data Science & AI Certification Program for BFSI Professionals",
    price: 90000,
  },
  { name: "Master's Degree in CS: Data Science and AI", price: 250000 },
  { name: "Data Science and AI Program for Freshers", price: 70000 },
  { name: "Data Science Foundation Program", price: 70000 },
  { name: "Cloud Computing & DevOps Certification Program", price: 80000 },
  { name: "Software Developer Certification", price: 115000 },
];

function EnrollPage({ label, ...rest }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (labelId) => {
    const label = document.getElementById(labelId);
    if (label) {
      label.classList.add(styles.focused);
    }
  };

  const handleBlur = (labelId, value) => {
    const label = document.getElementById(labelId);
    if (!value && label) {
      label.classList.remove(styles.focused);
    }
  };
  const [mobile, setMobile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponValid, setCouponValid] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [isInstallmentSelected, setIsInstallmentSelected] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [discountMsg, setDiscountMsg] = useState("");
  const [submittingForm, setSubmittingForm] = useState(false);
  const router = useRouter();

  const openPopup = () => {
    setShowPopup(true);
  };
  useEffect(() => {
    if (discount != 0 && selectedProduct) {
      setTotalPrice(selectedProduct.price * (1 - discount / 100));
    }
  }, [discount]);
  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    let width = window.innerWidth;
    setMobile(width < 481);
  }, []);

  const handleProductChange = (e) => {
    const selectedProductIndex = e.target.value;
    setSelectedProduct(products[selectedProductIndex]);
    setTotalPrice(products[selectedProductIndex].price * 1.18);
  };

  const handleCouponChange = (e) => {
    const newCoupon = e.target.value;
    setSelectedCoupon(newCoupon);
    setCouponApplied(false);
    setCouponValid(true);
  };

  const handleCouponApply = async () => {
    if (selectedCoupon != " ") {
      try {
        const response = await fetch("/api/Database/getCoupon", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            couponCode: selectedCoupon,
          }),
        });
        if (response.status === 200) {
          const { couponName, msg } = await response.json();
          setDiscount(parseInt(couponName.discountPercent));
          setDiscountMsg(msg);
          const discountedPrice =
            selectedProduct.price *
            (1 - parseInt(couponName.discountPercent) / 100);
          setTotalPrice(discountedPrice * 1.18);
          setCouponApplied(true);
          setCouponValid(true);
        } else if (response.status === 404) {
          setCouponValid(false);
          setDiscountMsg("Coupon Not Valid");
        }
      } catch (err) {
        console.error(
          "You have an error in your code or there are network issues.",
          err
        );
      }
    }
    if (selectedProduct === null) {
      alert("please select a prooduct");
    } else if (selectedCoupon != " " && selectedProduct) {
      const discountedPrice = selectedProduct.price * (1 - discount / 100);
      setTotalPrice(discountedPrice * 1.18);
      setCouponApplied(true);
      setCouponValid(true);
    } else if (selectedProduct && selectedCoupon === " ") {
      setCouponApplied(false);
      setCouponValid(false);
      setTotalPrice(selectedProduct.price * 1.18);
    }
  };
  const handleCouponCancel = () => {
    const totalPriceWithoutDiscount = selectedProduct
      ? selectedProduct.price * 1.18
      : 0;

    if (couponApplied) {
      setTotalPrice(totalPriceWithoutDiscount);
    }

    setSelectedCoupon("");
    setCouponApplied(false);
    setCouponValid(true);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleRadioChange = (e) => {
    if (e.target.value === "installments") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const makePayment = async () => {
    try {
      const res = await initializeRazorpay();
      if (!res) {
        throw new Error("Razorpay SDK failed to load");
      }
      const response = await fetch("/api/Razor_pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalPrice,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Razorpay details");
      }

      const data = await response.json();
      const options = {
        key: process.env.RAZORPAY_KEY,
        name: "Learnbay",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your purchase",
        image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp",
        handler: function (response) {
          handleFormSubmit(response.razorpay_payment_id);
          alert(
            "Payment successful! Payment ID: " + response.razorpay_payment_id
          );
          // After successful payment, submit form data
          router.push('/payment-success');
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error making payment:", error);
      alert("Error making payment. Please try again.");
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handleFormSubmit = (PaymentId) => {
    setSubmittingForm(true);
    console.log("insidewe defwaecsdewd");
    const formData = {
      name: name,
      email: email,
      phone: phone,
      selectedProduct: selectedProduct.name,
      selectedCoupon: selectedCoupon,
      totalPrice: totalPrice,
      paymentType: paymentType,
      PaymentId: PaymentId,
      url: router.asPath,
    };

    axios
      .post(
        "https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92",
        formData
      )
      .then((response) => {
        console.log("Form submitted successfully to external endpoint!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setSubmittingForm(false);
      });
  };

  return (
    <section className={styles.MainDiv}>
      {showPopup && (
        <EnrollPopup
          onClose={closePopup}
          name={name}
          email={email}
          phone={phone}
          selectedProduct={selectedProduct}
          selectedCoupon={selectedCoupon}
          totalPrice={totalPrice}
          paymentType={paymentType}
        />
      )}
      <div className={styles.logoImage}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
          alt="Learnbay"
          quality={100}
          priority
          style={{ objectFit: "contain" }}
          width={mobile ? "135" : "230"}
          height={60}
          loading="lazy"
        
        />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formLeft}>
          <h4 className={styles.Text}>Checkout</h4>
          <form>
            <div className={styles.divFlex}>
              <div className={styles.formGroup}>
                <input
                  {...rest}
                  type="text"
                  className={styles.formControl}
                  onFocus={() => handleFocus("fullNameLabel")}
                  onBlur={() => handleBlur("fullNameLabel", name)}
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  id="fullNameLabel"
                  className={`${styles.formLabel} ${
                    focused ? styles.focused : ""
                  }`}
                >
                  Full Name *
                </label>
              </div>
              <div className={styles.formGroup}>
                <input
                  {...rest}
                  type="email"
                  className={styles.formControl}
                  onFocus={() => handleFocus("EmailId")}
                  onBlur={() => {
                    handleBlur("EmailId", email);
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  id="EmailId"
                  className={`${styles.formLabel} ${
                    focused ? styles.focused : ""
                  }`}
                >
                  Email id *
                </label>
              </div>
            </div>
            <div className={styles.divFlex}>
              <div className={styles.formGroup}>
                <input
                  {...rest}
                  type="tel"
                  className={styles.formControl}
                  onFocus={() => handleFocus("PhonId")}
                  onBlur={() => {
                    handleBlur("PhonId", phone);
                  }}
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label
                  id="PhonId"
                  className={`${styles.formLabel} ${
                    focused ? styles.focused : ""
                  }`}
                >
                  Phone *
                </label>
              </div>

              <div className={styles.formGroup}>
                <select
                  {...rest}
                  className={styles.formControl}
                  onFocus={() => handleFocus("productsId")}
                  onBlur={() => handleBlur("productsId", products)}
                  onChange={handleProductChange}
                  style={{ color: "#0072BC" }}
                  required
                >
                  <option></option>
                  {products.map((product, index) => (
                    <option key={index} value={index}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <label
                  id="productsId"
                  className={`${styles.formLabel} ${
                    focused ? styles.focused : ""
                  }`}
                >
                  Select Product *
                </label>
              </div>
            </div>
            {selectedProduct && (
              <div className={styles.divFlex}>
                <div className={styles.formGroup}>
                  <input
                    {...rest}
                    type="text"
                    className={styles.formControl}
                    onFocus={() => handleFocus("CouponId")}
                    onBlur={() => handleBlur("CouponId", selectedCoupon)}
                    value={selectedCoupon}
                    onChange={handleCouponChange}
                  />
                  <label
                    id="CouponId"
                    className={`${styles.formLabel} ${
                      focused ? styles.focused : ""
                    }`}
                  >
                    Coupon Code
                  </label>
                  <button
                    type="button"
                    className={styles.CouponButton}
                    disabled={!selectedCoupon.trim()}
                    onClick={
                      couponApplied ? handleCouponCancel : handleCouponApply
                    }
                  >
                    {couponApplied ? "CANCEL" : "APPLY"}
                  </button>
                </div>
                <div className={styles.formGroup}>
                  {" "}
                  {!couponValid && (
                    <p className={styles.error}>{discountMsg}</p>
                  )}
                </div>
              </div>
            )}
          </form>
          <div className={styles.NewDiv}>
            <h4 className={styles.Text}>Course Selected</h4>
            {selectedProduct && (
              <div className={styles.CoursePrice}>
                <p className={styles.courseName}>
                  <FaReact className={styles.icon} />
                  {selectedProduct.name}
                </p>
                <p className={styles.PriceName}>
                  {"₹" + selectedProduct.price.toFixed(2)}
                </p>
              </div>
            )}
            <div className={styles.radioButtons}>
              <label>
                <input
                  type="radio"
                  name="paymentType"
                  value="full"
                  onChange={(e) => {
                    handlePaymentTypeChange(e);
                    setIsInstallmentSelected(false);
                  }}
                  className={styles.radioMargin}
                />
                Pay via Credit Card/ Debit Card/ Net Banking
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentType"
                  value="installments"
                  onChange={(e) => {
                    handlePaymentTypeChange(e);
                    setIsInstallmentSelected(true);
                  }}
                  className={styles.radioMargin}
                />
                No cost finance with minimum documents
              </label>
            </div>
          </div>
        </div>
        <div className={styles.formRight}>
          <h4 className={styles.Text}>Summary</h4>
          <form>
            {selectedProduct && (
              <div className={styles.divInput}>
                <label className={styles.Label}>Course Fee:</label>
                <span className={styles.price}>
                  {"₹" + selectedProduct.price.toFixed(2)}
                </span>
              </div>
            )}

            {selectedProduct && (
              <div className={styles.divInput}>
                <label className={styles.Label}>GST (18%):</label>
                <span className={styles.price}>
                  {"₹" + (selectedProduct.price * 0.18).toFixed(2)}
                </span>
              </div>
            )}
            {selectedProduct && couponApplied && (
              <div className={styles.divInput}>
                <label className={styles.Label}>Discount Amount:</label>
                <span className={styles.price}>
                  {"₹" +
                    (selectedProduct.price * (discount / 100) * 1.18).toFixed(
                      2
                    )}{" "}
                </span>
              </div>
            )}

            <hr className={styles.hr}></hr>
            <div className={styles.boxShadowMobile}>
              <div className={styles.divInput}>
                <label className={styles.Label}>
                  <b>Total:</b>
                </label>
                <span className={styles.price}>
                  <b>{"₹" + totalPrice.toFixed(2)}</b>
                </span>
              </div>
              <p className={styles.cont}>
                By completing your purchases you agree to these{" "}
                <b>Terms of Services</b>
              </p>
              <button
                type="button"
                onClick={() => {
                  console.log("Checking if fields are empty...");
                  if (
                    !name ||
                    !email ||
                    !phone ||
                    !selectedProduct ||
                    submittingForm
                  ) {
                    console.log("Fields are empty. Showing alert...");
                    alert("Please fill in all the required fields.");
                    return;
                  }
                  console.log("Fields are filled. Proceeding with checkout...");
                  if (isInstallmentSelected) {
                    setShowPopup(true);
                  } else {
                    makePayment()
                      .then(() => {
                        console.log(
                          "Payment completed successfully. Proceeding with form submission..."
                        );
                        // Assuming makePayment resolves without an error, indicating a successful payment
                        setSubmittingForm(true);
                      })
                      .catch((error) => {
                        console.error("Error making payment:", error);
                        alert("Error making payment. Please try again.");
                      });
                  }
                }}
                className={`${styles.button} ${
                  !name ||
                  !email ||
                  !phone ||
                  !selectedProduct ||
                  submittingForm
                    ? styles.disabled
                    : ""
                }`}
                disabled={
                  !name ||
                  !email ||
                  !phone ||
                  !selectedProduct ||
                  submittingForm
                }
              >
                {submittingForm ? "Submitting..." : "Complete Checkout"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EnrollPage;
