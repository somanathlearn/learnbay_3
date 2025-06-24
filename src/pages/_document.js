import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="ALL" />

        {/* <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/mbl_home_two.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BG_Home_1.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/logo_mix_mbl.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibm_mix_logo.webp"
          as="image"
        /> */}

        <script
          defer
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.learnbay.co/",
              "sameAs": [
                "https://www.facebook.com/learnbay/",
                "https://twitter.com/Learnbay",
                "https://www.instagram.com/learnbayofficial/",
                "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                "https://www.linkedin.com/company/learnbay/"
              ],
              "logo": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
              "name": "Learnbay",
              "description": "Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1090 , 1st floor, 18th cross road HSR layout sector 3",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560102",
                "addressCountry": "IN"
              },
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": 265
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contacts@learnbay.co",
                "telephone": "(+91) 77956 87988"
              }
            } `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
