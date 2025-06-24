import { useEffect, useState } from "react";
import Footer from "../components/Global/Footer/Footer";
import Navbar from "../components/Global/Navbar/Navbar";
import LoanProcess from "@/components/LoanProcess/LoanProcess";
import { useRouter } from "next/router";
import Head from "next/head";

const ThankYouDemo = () => {
  const [formData, setFormData] = useState({
    course: "",
    totalAmount: "",
    date: "",
    time: "",
  });
  const router = useRouter();
  useEffect(() => {
    const { course, amount, date, time } = router.query;
    setFormData({ course, totalAmount: amount, date, time });
  }, [router.query]);

  return (
    <div>
      <Head>
        <title>Your loan process is initiated!</title>

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <Navbar />
      <LoanProcess
        course={formData.course}
        totalAmount={formData.totalAmount}
        date={formData.date}
        time={formData.time}
      />
      <Footer />
    </div>
  );
};

export default ThankYouDemo;
