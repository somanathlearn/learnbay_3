const isProd = process.env.NODE_ENV == "production";
const nextConfig = {
  assetPrefix: isProd ? "https://d32and0ii3b8oy.cloudfront.net/" : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "react-phone-input-2",
      "react-icons",
      "swiper",
      "mongodb",
      "typed.js",
    ],

    // nextScriptWorkers: true,
  },

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d32and0ii3b8oy.cloudfront.net",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-training-in-bangalore",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/data-science-online-training-in-bangalore",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-course-online-in-bangalore",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-course-in-bangalore",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/machine-learning-course-in-bangalore",
        destination:
          "/datascience/bangalore/machine-learning-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/machine-learning-course-online-in-bangalore",
        destination:
          "/datascience/bangalore/machine-learning-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/machine-learning-online-training-in-bangalore",
        destination:
          "/datascience/bangalore/machine-learning-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/machine-learning-course-training-in-bangalore",
        destination:
          "/datascience/bangalore/machine-learning-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-course-in-bangalore",
        destination:
          "/datascience/bangalore/data-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-training-in-bangalore",
        destination:
          "/datascience/bangalore/data-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/data-analytics-course-online-in-bangalore",
        destination:
          "/datascience/bangalore/data-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/business-analytics-course-in-bangalore",
        destination:
          "/datascience/bangalore/business-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/business-analytics-training-in-bangalore",
        destination:
          "/datascience/bangalore/business-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/artificial-intelligence-course-in-bangalore",
        destination:
          "/datascience/bangalore/artificial-intelligence-ai-course-training-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/artificial-intelligence-course-online-in-bangalore",
        destination:
          "/datascience/bangalore/artificial-intelligence-ai-course-training-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/artificial-intelligence-online-training-in-bangalore",
        destination:
          "/datascience/bangalore/artificial-intelligence-ai-course-training-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/artificial-intelligence-training-in-bangalore",
        destination:
          "/datascience/bangalore/artificial-intelligence-ai-course-training-bangalore",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-course-in-pune",
        destination: "/datascience/pune/data-science-course-training-in-pune",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/machine-learning-course-in-pune",
        destination:
          "/datascience/pune/machine-learning-course-training-in-pune",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-course-in-pune",
        destination: "/datascience/pune/data-analytics-course-training-in-pune",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/business-analytics-course-in-pune",
        destination:
          "/datascience/pune/business-analytics-course-training-in-pune",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-course-in-delhi",
        destination: "/datascience/delhi/data-science-course-training-in-delhi",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/machine-learning-course-in-delhi",
        destination:
          "/datascience/delhi/machine-learning-course-training-in-delhi",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-course-in-delhi",
        destination:
          "/datascience/delhi/data-analytics-course-training-in-delhi",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/business-analytics-course-in-delhi",
        destination:
          "/datascience/delhi/business-analytics-course-training-in-delhi",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/artificial-intelligence-course-in-delhi",
        destination:
          "/datascience/delhi/artificial-intelligence-ai-course-training-delhi",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/artificial-intelligence-course-in-chennai",
        destination:
          "/datascience/chennai/artificial-intelligence-ai-course-training-chennai",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-certification-in-mumbai",
        destination:
          "/datascience/mumbai/data-science-course-training-in-mumbai",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/artificial-intelligence-course-in-mumbai",
        destination:
          "/datascience/mumbai/artificial-intelligence-ai-course-training-mumbai",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-course-in-mumbai",
        destination:
          "/datascience/mumbai/data-analytics-course-training-in-mumbai",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-courses-in-hyderabad",
        destination:
          "/datascience/hyderabad/data-science-course-training-in-hyderabad",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-training-in-hyderabad",
        destination:
          "/datascience/hyderabad/data-science-course-training-in-hyderabad",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/machine-learning-course-in-hyderabad",
        destination:
          "/datascience/hyderabad/machine-learning-course-training-in-hyderabad",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-course-in-hyderabad",
        destination:
          "/datascience/hyderabad/data-analytics-course-training-in-hyderabad",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-course-in-hyderabad-2",
        destination:
          "/datascience/hyderabad/data-analytics-course-training-in-hyderabad",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/business-analytics-online-course-in-hyderabad",
        destination:
          "/datascience/hyderabad/business-analytics-course-training-in-hyderabad",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source:
          "/data-science-course/artificial-intelligence-course-in-hyderabad",
        destination:
          "/datascience/hyderabad/artificial-intelligence-ai-course-training-hyderabad",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-science-course-in-canada",
        destination:
          "/datascience/canada/data-science-course-training-in-canada",
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: "/data-science-course/data-analytics-course-in-canada",
        destination:
          "/datascience/canada/data-analytics-course-training-in-canada",
        permanent: true,
      },
      {
        source: "/data-science-course",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        source: "/data-science-course/machine-learning-course-in-dubai",
        destination:
          "/datascience/dubai/machine-learning-course-training-in-dubai",
        permanent: true,
      },
      {
        source: "/data-science-course/data-analytics-course-in-dubai-uae",
        destination:
          "/datascience/dubai/data-analytics-course-training-in-dubai",
        permanent: true,
      },

      {
        source: "/data-science-course/business-analytics-course-in-dubai",
        destination:
          "/datascience/dubai/business-analytics-course-training-in-dubai",
        permanent: true,
      },
      {
        source: "/data-science-course/artificial-intelligence-course-in-dubai",
        destination:
          "/datascience/dubai/artificial-intelligence-ai-course-training-dubai",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-courses-in-chennai",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-certification-courses",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source:
          "/data-science-course/advance-data-science-certification-courses",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source:
          "/data-science-course/artificial-intelligence-certification-course",
        destination:
          "/datascience/artificial-intelligence-certification-course",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-ai-for-managers",
        destination: "/datascience/data-science-ai-for-managers",
        permanent: true,
      },
      {
        source:
          "/data-science-course/job-guarantee-or-money-back-data-science-ai-certification-course",
        destination: "/datascience/data-science-ai-masters-program",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-certification-courses",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-analytics-business-analytics-programs-for-professionals",
        destination: "/datascience/data-analytics-certification-course",
        permanent: true,
      },
      {
        source:
          "/data-science-course/top-data-science-certifications-in-2022-exclusive-to-banking-professionals",
        destination:
          "https://blog.learnbay.co/top-data-science-certifications-in-2022-exclusive-to-banking-professionals",
        permanent: true,
      },
      {
        source:
          "/data-science-course/how-does-data-science-promote-project-Managers-to-a-new-perspective-of-success",
        destination:
          "https://blog.learnbay.co/how-does-data-science-promote-project-managers-to-a-new-perspective-of-success",
        permanent: true,
      },
      {
        source: "/data-science-course/know-the-top-10-data-science-trends-2022",
        destination:
          "https://blog.learnbay.co/know-the-top-10-data-science-trends-2022",
        permanent: true,
      },
      {
        source:
          "/data-science-course/how-to-build-a-rewarding-career-as-a-healthcare-data-scientist",
        destination:
          "https://blog.learnbay.co/how-to-build-a-rewarding-career-as-a-healthcare-data-scientist",
        permanent: true,
      },
      {
        source:
          "/data-science-course/how-data-analytics-can-fast-track-your-e-commerce-retail-and-supply-chain-career",
        destination:
          "https://blog.learnbay.co/how-data-analytics-can-fast-track-your-e-commerce-retail-and-supply-chain-career",
        permanent: true,
      },
      {
        source:
          "/data-science-course/banking-finance-services-insurance-sector-know-how-to-achieve-the-most-lucrative-salary-package",
        destination:
          "https://blog.learnbay.co/banking-finance-services-insurance-sector-know-how-to-achieve-the-most-lucrative-salary-package",
        permanent: true,
      },
      {
        source:
          "/data-science-course/marketing-sales-and-hr-is-being-a-data-scientist-the-only-hope",
        destination:
          "https://blog.learnbay.co/marketing-sales-and-hr-is-being-a-data-scientist-the-only-hope",
        permanent: true,
      },
      {
        source:
          "/data-science-course/media-hospitality-and-transportation-know-how-data-science-will-help-you-to-survive",
        destination:
          "https://blog.learnbay.co/media-hospitality-and-transportation-know-how-data-science-will-help-you-to-survive",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-jobs-the-busting-ways-to-secure-attractive-packages-in-health-care",
        destination:
          "https://blog.learnbay.co/data-science-jobs-the-busting-ways-to-secure-attractive-packages-in-health-care",
        permanent: true,
      },
      {
        source:
          "/data-science-course/how-to-make-a-rewarding-career-in-the-energy-oil-and-gas-domain-as-a-data-scientist",
        destination:
          "https://blog.learnbay.co/how-to-make-a-rewarding-career-in-the-energy-oil-and-gas-domain-as-a-data-scientist",
        permanent: true,
      },
      {
        source:
          "/data-science-course/nlp-and-deep-learning-for-data-scientists",
        destination:
          "https://blog.learnbay.co/nlp-and-deep-learning-for-data-scientists",
        permanent: true,
      },
      {
        source:
          "/data-science-course/method-overriding-in-python-of-data-science-everything-you-need-to-know",
        destination:
          "https://blog.learnbay.co/method-overriding-in-python-of-data-science-everything-you-need-to-know",
        permanent: true,
      },
      {
        source:
          "/data-science-course/different-job-roles-after-a-data-science-course",
        destination:
          "https://blog.learnbay.co/different-job-roles-after-a-data-science-course",
        permanent: true,
      },
      {
        source:
          "/data-science-course/clustering-data-science-unsupervised-learning",
        destination:
          "https://blog.learnbay.co/clustering-data-science-unsupervised-learning",
        permanent: true,
      },
      {
        source:
          "/data-science-course/Introduction to Simple Linear Regression in Machine Learning",
        destination:
          "https://blog.learnbay.co/Introduction to Simple Linear Regression in Machine Learning",
        permanent: true,
      },
      {
        source:
          "/data-science-course/know-the-best-strategy-to-find-the-right-data-science-job-in-delhi",
        destination:
          "https://blog.learnbay.co/know-the-best-strategy-to-find-the-right-data-science-job-in-delhi",
        permanent: true,
      },
      {
        source:
          "/data-science-course/investing-3-lakhs-on-data-science-certification-course-does-it-really-worth",
        destination:
          "https://blog.learnbay.co/investing-3-lakhs-on-data-science-certification-course-does-it-really-worth",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-for-working-professionals",
        destination:
          "https://blog.learnbay.co/data-science-for-working-professionals",
        permanent: true,
      },
      {
        source:
          "/data-science-course/regression-techniques-in-machine-learning",
        destination:
          "https://blog.learnbay.co/regression-techniques-in-machine-learning",
        permanent: true,
      },
      {
        source:
          "/data-science-course/top-50-interview-questions-of-machine-learning",
        destination:
          "https://blog.learnbay.co/top-50-interview-questions-of-machine-learning",
        permanent: true,
      },
      {
        source: "/data-science-course/top-50-interview-question-on-statistics",
        destination:
          "https://blog.learnbay.co/top-50-interview-question-on-statistics",
        permanent: true,
      },
      {
        source: "/data-science-course/Model vs Algorithm in ML",
        destination: "https://blog.learnbay.co/Model vs Algorithm in ML",
        permanent: true,
      },
      {
        source: "/data-science-course/introduction-to-python-programming",
        destination:
          "https://blog.learnbay.co/introduction-to-python-programming",
        permanent: true,
      },
      {
        source:
          "/data-science-course/win-this-covid-19-with-data-science-course",
        destination:
          "https://blog.learnbay.co/win-this-covid-19-with-data-science-course",
        permanent: true,
      },
      {
        source: "/data-science-course/text-stemming-in-nlp",
        destination: "https://blog.learnbay.co/text-stemming-in-nlp",
        permanent: true,
      },
      {
        source: "/data-science-course/gaussian-and-normal-distribution",
        destination:
          "https://blog.learnbay.co/gaussian-and-normal-distribution",
        permanent: true,
      },
      {
        source:
          "/data-science-course/what-is-supervised-and-unsupervised-learning-in-machine-learning",
        destination:
          "https://blog.learnbay.co/what-is-supervised-and-unsupervised-learning-in-machine-learning",
        permanent: true,
      },
      {
        source: "/data-science-course/gradient-descent-for-machine-learning",
        destination:
          "https://blog.learnbay.co/gradient-descent-for-machine-learning",
        permanent: true,
      },
      {
        source: "/data-science-course/xgboost-classifier",
        destination: "https://blog.learnbay.co/xgboost-classifier",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-at-intern-level",
        destination: "https://blog.learnbay.co/data-science-at-intern-level",
        permanent: true,
      },
      {
        source:
          "/data-science-course/exploratory-data-analysis-on-iris-dataset",
        destination:
          "https://blog.learnbay.co/exploratory-data-analysis-on-iris-dataset",
        permanent: true,
      },
      {
        source: "/data-science-course/linear-regression-in-machine-learning",
        destination:
          "https://blog.learnbay.co/linear-regression-in-machine-learning",
        permanent: true,
      },
      {
        source: "/data-science-course/random-forest-model-rfm",
        destination: "https://blog.learnbay.co/random-forest-model-rfm",
        permanent: true,
      },
      {
        source: "/data-science-course/why-you-need-data-science",
        destination: "https://blog.learnbay.co/why-you-need-data-science",
        permanent: true,
      },
      {
        source:
          "/data-science-course/human-activity-recognition-with-smart-phone",
        destination:
          "https://blog.learnbay.co/human-activity-recognition-with-smart-phone",
        permanent: true,
      },
      {
        source: "/data-science-course/young-data-scientists",
        destination: "https://blog.learnbay.co/young-data-scientists",
        permanent: true,
      },
      {
        source: "/data-science-course/decision-tree",
        destination: "https://blog.learnbay.co/decision-tree",
        permanent: true,
      },
      {
        source: "/data-science-course/support-vector-machines",
        destination: "https://blog.learnbay.co/support-vector-machines",
        permanent: true,
      },
      {
        source: "/data-science-course/data-preprocessing",
        destination: "https://blog.learnbay.co/data-preprocessing",
        permanent: true,
      },
      {
        source:
          "/data-science-course/different-jobs-opportunities-of-data-science",
        destination:
          "https://blog.learnbay.co/different-jobs-opportunities-of-data-science",
        permanent: true,
      },
      {
        source:
          "/data-science-course/you-could-be-a-pro-in-data-science-by-self-assisting-data-scientist",
        destination:
          "https://blog.learnbay.co/you-could-be-a-pro-in-data-science-by-self-assisting-data-scientist",
        permanent: true,
      },
      {
        source:
          "/data-science-course/differentiating-data-scientist-and-data-analyst",
        destination:
          "https://blog.learnbay.co/differentiating-data-scientist-and-data-analyst",
        permanent: true,
      },
      {
        source: "/data-science-course/customer-experience-enhancement-in-banks",
        destination:
          "https://blog.learnbay.co/customer-experience-enhancement-in-banks",
        permanent: true,
      },
      {
        source:
          "/data-science-course/future-of-education-in-hands-of-machine-learning",
        destination:
          "https://blog.learnbay.co/future-of-education-in-hands-of-machine-learning",
        permanent: true,
      },
      {
        source:
          "/data-science-course/practice-of-intelligence-with-help-of-artificial-intelligence-in-academics",
        destination:
          "https://blog.learnbay.co/practice-of-intelligence-with-help-of-artificial-intelligence-in-academics",
        permanent: true,
      },
      {
        source: "/data-science-course/necessity-of-machine-learning-in-retail",
        destination:
          "https://blog.learnbay.co/necessity-of-machine-learning-in-retail",
        permanent: true,
      },
      {
        source: "/data-science-course/artificial-intelligence-in-e-commerce",
        destination:
          "https://blog.learnbay.co/artificial-intelligence-in-e-commerce",
        permanent: true,
      },
      {
        source:
          "/data-science-course/reliable-sources-to-understand-about-data-science",
        destination:
          "https://blog.learnbay.co/reliable-sources-to-understand-about-data-science",
        permanent: true,
      },
      {
        source: "/data-science-course/evolution-of-data-science-in-india",
        destination:
          "https://blog.learnbay.co/evolution-of-data-science-in-india",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-certification-courses",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source: "/data-science-course/business-analytics-course-in-bangalore",
        destination:
          "/datascience/bangalore/business-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-analytics-online-training-in-bangalore",
        destination:
          "/datascience/bangalore/data-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        source: "/data-science-course/webinar",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-course/shop",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-course/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/data-science-course/reviews",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/data-science-course/team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-course/thank-you",
        destination: "/Thank-you",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-course-in-dubai-uae",
        destination: "/datascience/dubai/data-science-course-training-in-dubai",
        permanent: true,
      },
      {
        source:
          "/data-science-course/product/data-science-and-ai-certification-freshers",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-and-ai-for-fresh-graduates-learnbay",
        destination: "/fullstack/full-stack-software-development-program",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-course-online",
        destination: "/datascience/data-science-ai-for-managers",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/learnbay",
        destination:
          "/datascience/artificial-intelligence-certification-course",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-and-ai-for-fresh-graduates-learnbay",
        destination: "/datascience/data-science-ai-masters-program",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/leanbaybangaluru",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/statistics",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/nlp",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/ai",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/lemmatization",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/css",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/ibm",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/category/technology",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/Learnbay",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/tag/bangalore",
        destination: "https://www.learnbay.co/",
        permanent: true,
      },
      {
        source: "/data-science-course/model-vs-algorithm-in-ml",
        destination: "https://blog.learnbay.co/model-vs-algorithm-in-ml",
        permanent: true,
      },

      {
        source: "/data-analytics-certification-course-generic",
        destination: "/datascience/data-analytics-certification-course",
        permanent: true,
      },

      {
        source: "/data-science-ai-for-managers-generic",
        destination: "/datascience/data-science-ai-for-managers",
        permanent: true,
      },

      {
        source: "/data-science-ai-masters-program-generic",
        destination: "/datascience/data-science-ai-masters-program",
        permanent: true,
      },

      {
        source: "/data-science-certification-courses-generic",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },

      {
        source: "/advance-data-science-certification-courses-generic",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source: "/advance-data-science-certification-courses",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-certification-course",
        destination:
          "/datascience/artificial-intelligence-certification-course",
        permanent: true,
      },
      {
        source: "/best-data-science-courses-in-india",
        destination: "/datascience/best-data-science-courses-in-india",
        permanent: true,
      },
      {
        source: "/business-analytics-certification-course",
        destination: "/datascience/business-analytics-certification-course",
        permanent: true,
      },
      {
        source: "/data-analytics-certification-course",
        destination: "/datascience/data-analytics-certification-course",
        permanent: true,
      },
      {
        source: "/data-science-ai-for-managers",
        destination: "/datascience/data-science-ai-for-managers",
        permanent: true,
      },
      {
        source: "/data-science-ai-masters-program",
        destination: "/datascience/data-science-ai-masters-program",
        permanent: true,
      },
      {
        source: "/data-science-certification-course",
        destination: "/datascience/data-science-certification-courses",
        permanent: true,
      },
      // {
      //   source: "/data-science-certification-courses",
      //   destination: "/datascience/advance-data-science-certification-courses",
      //   permanent: true,
      // },
      {
        source: "/data-science-course",
        destination: "/datascience/data-science-course",
        permanent: true,
      },
      {
        source: "/data-science-for-bfsi-professional",
        destination: "/datascience/data-science-for-bfsi-professional",
        permanent: true,
      },
      {
        source: "/hr-analytics",
        destination: "/datascience/hr-analytics",
        permanent: true,
      },
      {
        source: "/marketing-analytics",
        destination: "/datascience/marketing-analytics",
        permanent: true,
      },
      {
        source: "/dsa-system-design",
        destination: "/fullstack/dsa-system-design",
        permanent: true,
      },
      {
        source: "/full-stack-software-development-program",
        destination: "/fullstack/full-stack-software-development-program",
        permanent: true,
      },
      {
        source: "/software-development-program-for-freshers",
        destination: "/fullstack/software-development-program-for-freshers",
        permanent: true,
      },
      {
        source:
          "/software-development-program-with-specialization-in-blockchain",
        destination:
          "/fullstack/software-development-program-with-specialization-in-blockchain",
        permanent: true,
      },
      {
        source:
          "/software-development-program-with-specialization-in-cloud-computing-&-devops",
        destination:
          "/fullstack/software-development-program-with-specialization-in-cloud-computing-&-devops",
        permanent: true,
      },
      {
        source: "/full-stack-web-development-program",
        destination: "/fullstack/full-stack-web-development-program",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-bangalore",
        destination:
          "/datascience/bangalore/artificial-intelligence-ai-course-training-bangalore",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-canada",
        destination:
          "/datascience/canada/artificial-intelligence-ai-course-training-canada",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-chennai",
        destination:
          "/datascience/chennai/artificial-intelligence-ai-course-training-chennai",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-delhi",
        destination:
          "/datascience/delhi/artificial-intelligence-ai-course-training-delhi",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-dubai",
        destination:
          "/datascience/dubai/artificial-intelligence-ai-course-training-dubai",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-hyderabad",
        destination:
          "/datascience/hyderabad/artificial-intelligence-ai-course-training-hyderabad",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-mumbai",
        destination:
          "/datascience/mumbai/artificial-intelligence-ai-course-training-mumbai",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-ai-course-training-pune",
        destination:
          "/datascience/pune/artificial-intelligence-ai-course-training-pune",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-bangalore",
        destination:
          "/datascience/bangalore/business-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-canada",
        destination:
          "/datascience/canada/business-analytics-course-training-in-canada",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-chennai",
        destination:
          "/datascience/chennai/business-analytics-course-training-in-chennai",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-delhi",
        destination:
          "/datascience/delhi/business-analytics-course-training-in-delhi",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-dubai",
        destination:
          "/datascience/dubai/business-analytics-course-training-in-dubai",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-hyderabad",
        destination:
          "/datascience/hyderabad/business-analytics-course-training-in-hyderabad",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-mumbai",
        destination:
          "/datascience/mumbai/business-analytics-course-training-in-mumbai",
        permanent: true,
      },
      {
        source: "/business-analytics-course-training-in-pune",
        destination:
          "/datascience/pune/business-analytics-course-training-in-pune",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-bangalore",
        destination:
          "/datascience/bangalore/data-analytics-course-training-in-bangalore",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-canada",
        destination:
          "/datascience/canada/data-analytics-course-training-in-canada",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-chennai",
        destination:
          "/datascience/chennai/data-analytics-course-training-in-chennai",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-delhi",
        destination:
          "/datascience/delhi/data-analytics-course-training-in-delhi",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-dubai",
        destination:
          "/datascience/dubai/data-analytics-course-training-in-dubai",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-hyderabad",
        destination:
          "/datascience/hyderabad/data-analytics-course-training-in-hyderabad",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-mumbai",
        destination:
          "/datascience/mumbai/data-analytics-course-training-in-mumbai",
        permanent: true,
      },
      {
        source: "/data-analytics-course-training-in-pune",
        destination: "/datascience/pune/data-analytics-course-training-in-pune",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-bangalore",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-canada",
        destination:
          "/datascience/canada/data-science-course-training-in-canada",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-chennai",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-delhi",
        destination: "/datascience/delhi/data-science-course-training-in-delhi",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-dubai",
        destination: "/datascience/dubai/data-science-course-training-in-dubai",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-hyderabad",
        destination:
          "/datascience/hyderabad/data-science-course-training-in-hyderabad",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-mumbai",
        destination:
          "/datascience/mumbai/data-science-course-training-in-mumbai",
        permanent: true,
      },
      {
        source: "/data-science-course-training-in-pune",
        destination: "/datascience/pune/data-science-course-training-in-pune",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-bangalore",
        destination:
          "/datascience/bangalore/machine-learning-course-training-in-bangalore",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-canada",
        destination:
          "/datascience/canada/machine-learning-course-training-in-canada",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-chennai",
        destination:
          "/datascience/chennai/machine-learning-course-training-in-chennai",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-delhi",
        destination:
          "/datascience/delhi/machine-learning-course-training-in-delhi",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-dubai",
        destination:
          "/datascience/dubai/machine-learning-course-training-in-dubai",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-hyderabad",
        destination:
          "/datascience/hyderabad/machine-learning-course-training-in-hyderabad",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-mumbai",
        destination:
          "/datascience/mumbai/machine-learning-course-training-in-mumbai",
        permanent: true,
      },
      {
        source: "/machine-learning-course-training-in-pune",
        destination:
          "/datascience/pune/machine-learning-course-training-in-pune",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-bangalore",
        destination:
          "/fullstack/bangalore/full-stack-software-developer-course-in-bangalore",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-canada",
        destination:
          "/fullstack/canada/full-stack-software-developer-course-in-canada",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-chennai",
        destination:
          "/fullstack/chennai/full-stack-software-developer-course-in-chennai",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-delhi",
        destination:
          "/fullstack/delhi/full-stack-software-developer-course-in-delhi",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-dubai",
        destination:
          "/fullstack/dubai/full-stack-software-developer-course-in-dubai",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-hyderabad",
        destination:
          "/fullstack/hyderabad/full-stack-software-developer-course-in-hyderabad",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-mumbai",
        destination:
          "/fullstack/mumbai/full-stack-software-developer-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/full-stack-software-developer-course-in-pune",
        destination:
          "/fullstack/pune/full-stack-software-developer-course-in-pune",
        permanent: true,
      },
      {
        source:
          "/job-guarantee-or-money-back-data-science-ai-certification-course",
        destination: "/datascience/data-science-ai-masters-program",
        permanent: true,
      },
      {
        source: "/datascience/best-data-science-courses-in-india",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      // {
      //   source: "/datascience/data-science-ai-for-managers",
      //   destination: "/datascience/advance-data-science-certification-courses",
      //   permanent: true,
      // },
      {
        source: "/datascience/data-science-ai-masters-program",
        destination: "/datascience/data-science-and-ai-masters-in-cs",
        permanent: true,
      },
      // {
      //   source: "/datascience/data-science-certification-courses",
      //   destination: "/datascience/advance-data-science-certification-courses",
      //   permanent: true,
      // },

      // {
      //   source: "/datascience/hr-analytics",
      //   destination: "/datascience/business-analytics-certification-course",
      //   permanent: true,
      // },
      // {
      //   source: "/datascience/marketing-analytics",
      //   destination: "/datascience/business-analytics-certification-course",
      //   permanent: true,
      // },
      // {
      //   source: "/fullstack/dsa-system-design",
      //   destination: "/fullstack/full-stack-software-development-program",
      //   permanent: true,
      // },
      {
        source: "/fullstack/software-development-program-for-freshers",
        destination: "/fullstack/full-stack-software-development-program",
        permanent: true,
      },
      {
        source:
          "/fullstack/software-development-program-with-specialization-in-blockchain",
        destination: "/fullstack/full-stack-software-development-program",
        permanent: true,
      },
      {
        source:
          "/fullstack/software-development-program-with-specialization-in-cloud-computing-and-devops",
        destination: "/fullstack/full-stack-software-development-program",
        permanent: true,
      },
      {
        source: "/master-program-in-software-development",
        destination: "/fullstack/full-stack-software-development-program",
        permanent: true,
      },
      {
        source: "/master-program-in-software-development",
        destination: "/fullstack/full-stack-software-development-program",
        permanent: true,
      },

      {
        source: "/datascience/advance-data-analytics-program",
        destination: "/datascience/advance-data-analytics-program-iit-guwahati",
        permanent: true,
      },

      {
        source: "/datascience/executive-program-in-data-science-and-ai",
        destination:
          "/datascience/executive-program-in-data-science-and-ai-by-iit-guwahati",
        permanent: true,
      },

      {
        source: "/success-story",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/terms-conditions-job",
        destination: "/terms-conditions",
        permanent: true,
      },
      {
        source: "/data-science-certification-courses",
        destination: "/datascience/data-science-certification-courses",
        permanent: true,
      },
      {
        source: "/data-science-course/datascience-certification-in-mumbai",
        destination:
          "/datascience/mumbai/data-science-course-training-in-mumbai",
        permanent: true,
      },
      {
        source: "/cloud&devops/advance-cloud-computing-certification-program",
        destination:
          "/cloud&devops/cloud-computing-online-course-training-institute",
        permanent: true,
      },
      {
        source: "/hr-analytics-course",
        destination: "/datascience/hr-analytics",
        permanent: true,
      },
      {
        source: "/datascience/dhaka/data-science-course-training-in-dhaka",
        destination:
          "/datascience/bangladesh/data-science-course-training-in-dhaka",
        permanent: true,
      },
      {
        source: "/data-science-course/demo-session-and-sample-class-recordings",
        destination: "/demo",
        permanent: true,
      },
      {
        source: "/data-science-course/privacy-policy-2",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/success-story",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/data-science-course/artificial-intelligence-certification",
        destination:
          "/datascience/artificial-intelligence-certification-course",
        permanent: true,
      },
      {
        source: "/data-science-course/data-science-and-ai",
        destination: "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source: "/data-science-course/datascience-courses-in-chennai",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source: "/data-science-course/enrol-ai-ml",
        destination:
          "/datascience/artificial-intelligence-certification-course",
        permanent: true,
      },
      {
        source:
          "/data-science-course/blog-post/win-this-covid-19-with-data-science-course",
        destination:
          "https://blog.learnbay.co/win-this-covid-19-with-data-science-course",
        permanent: true,
      },
      {
        source:
          "/data-science-course/blog-post/you-could-be-a-pro-in-data-science-by-self-assisting",
        destination:
          "https://blog.learnbay.co/you-could-be-a-pro-in-data-science-by-self-assisting",
        permanent: true,
      },
      {
        source: "/data-science-course/blog-post/data-scientist-vs-data-analyst",
        destination: "https://blog.learnbay.co/data-analyst-vs-data-scientist",
        permanent: true,
      },
      {
        source:
          "/data-science-course/blog-post/to-learn-data-science-as-a-working-professional",
        destination:
          "https://blog.learnbay.co/data-science-for-working-professionals",
        permanent: true,
      },
      {
        source: "/data-science-course/blog-post/decision-tree",
        destination:
          "https://blog.learnbay.co/everything-about-decision-tree-from-scratch",
        permanent: true,
      },
      {
        source: "/data-science-course/category/data-science",
        destination: "https://blog.learnbay.co/category/data-science",
        permanent: true,
      },
      {
        source: "/data-science-course/blog-post/different-jobs-in-data-science",
        destination:
          "https://blog.learnbay.co/different-jobs-opportunities-of-data-science",
        permanent: true,
      },
      {
        source:
          "/data-science-course/blog-post/gaussian-and-normal-distribution",
        destination:
          "https://blog.learnbay.co/gaussian-and-normal-distribution",
        permanent: true,
      },
      {
        source: "/data-science-course/blog-post/xgboost-classifier",
        destination:
          "https://blog.learnbay.co/everything-about-the-xgboost-classifier",
        permanent: true,
      },
      {
        source:
          "/data-science-course/blog-post/regression-techniques-in-machine-learning",
        destination:
          "https://blog.learnbay.co/regression-techniques-in-machine-learning",
        permanent: true,
      },
      {
        source:
          "/course/advanced-data-science-and-ai-program",
        destination:
          "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
   

      
      {
        source:
          "/data-science-course/you-could-be-a-pro-in-data-science-by-self-assisting",
        destination:
          "https://blog.learnbay.co/you-could-be-a-pro-in-data-science-by-self-assisting",
        permanent: true,
      },
      {
        source:
          "/data-analytics-course-training-in-delh",
        destination:
          "/datascience/delhi/data-analytics-course-training-in-delhi",
        permanent: true,
      },{
        source:
          "/data-science-course/blog-post/investing-3-lakhs-on-data-science-certification-course-does-it-really-worth",
        destination:
          "https://blog.learnbay.co/investing-3-lakhs-on-data-science-certification-course-does-it-really-worth",
        permanent: true,
      },
   
      {
        source:
          "/datascience/advance-data-science-ce",
        destination:
          "/datascience/advance-data-science-certification-courses",
        permanent: true,
      },
      {
        source:
          "/datascience/fullstack/dsa-system-design",
        destination:
          "/fullstack/dsa-system-design",
        permanent: true,
      },
      {
        source:
          "/datascience/hyderabad/data-science-course-training-in-hyderabadBest",
        destination:
          "/datascience/hyderabad/data-science-course-training-in-hyderabad",
        permanent: true,
      },
      {
        source:
          "/data-science-course-training-in-banglore",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-courses-in-chennai/l",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-courses-in-chennai/l",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source:
          "/datascience/bangalore/fullstack/dsa-system-design",
        destination:
          "/fullstack/dsa-course-training-bangalore",
        permanent: true,
      },
      {
        source:
          "/fullstack/pune/fullstack/dsa-system-design",
        destination:
          "/fullstack/dsa-course-training-pune",
        permanent: true,
      },
      {
        source:
          "/fullstack/fullstack/dsa-system-design",
        destination:
          "/fullstack/dsa-system-design",
        permanent: true,
      },
      {
        source:
          "/cloud&devops/fullstack/dsa-system-design",
        destination:
          "/fullstack/dsa-system-design",
        permanent: true,
      },
      {
        source:
          "/datascience/india/fullstack/dsa-system-design",
        destination:
          "/fullstack/dsa-system-design",
        permanent: true,
      },
      {
        source:
          "/datascience/pune/fullstack/dsa-system-design",
        destination:
          "/fullstack/dsa-course-training-pune",
        permanent: true,
      },
      {
        source:
          "/datasscience-course/datasscience-course-in-bangalore",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },

        {
        source:
          "/datascience/chennai",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source:
          "/datascience/privacy-policy",
        destination:
          "/privacy-policy",
        permanent: true,
      },
      {
        source:
          "/data-science-course-training-in-bang",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-course-in-bangalor",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },
      {
        source:
          "/datascience/data-science-ai-for-managersData",
        destination:
          "/datascience/data-science-ai-for-managers",
        permanent: true,
      },
      {
        source:
          "/data-science-course/introduction-to-simple-linear-regression-in-machine-learning",
        destination:
          "https://blog.learnbay.co/introduction-to-simple-linear-regression-in-machine-learning",
        permanent: true,
      },
      {

        source:
          "/datascience/che",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-certification-in-mumbai/data-science-course/data-science-certification-in-mumbai",
        destination:
          "/datascience/mumbai/data-science-course-training-in-mumbai",
        permanent: true,
      },

       {
        source:
          "/data-science-course/data-data-science-course/data-science-courses-in-chennai",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-courses-in-chennai/This",
        destination:
          "/datascience/chennai/data-science-course-training-in-chennai",
        permanent: true,
      },
      {
        source:
          "/data-analytics-course-training-in-pu",
        destination:
          "/datascience/pune/data-science-course-training-in-pune",
        permanent: true,
      },
      {
        source:
          "/cloud&devops/bangalore/o",
        destination:
          "/cloud&devops/online-cloud-computing-course-bangalore",
        permanent: true,
      },
      {
        source:
          "/data-science-course/blogs-learnbay",
        destination:
          "https://blog.learnbay.co/category/data-science",
        permanent: true,
      },
      {
        source:
          "/clouddevops/c",
        destination:
          "/cloud&devops/cloud-computing-and-devOps-certification-program",
        permanent: true,
      },
      {
        source:
          "/datascience/bangalore/dsa-course-training-bangalore",
        destination:
          "/fullstack/dsa-course-training-bangalore",
        permanent: true,
      },
      {
        source:
          "/datascience/pune/dsa-course-training-pune",
        destination:
          "/fullstack/dsa-course-training-pune",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-sciencecertification-in-mumbai",
        destination:
          "/datascience/mumbai/data-science-course-training-in-mumbai",
        permanent: true,
      },
      {
        source:
          "/data-science-course/data-science-course-in-banga",
        destination:
          "/datascience/bangalore/data-science-course-training-in-bangalore",
        permanent: true,
      },

      {
        source:
          "/cloud&amp;devops/cloud-computing-online-course-training-institute",
        destination:
          "/cloud&devops/cloud-computing-online-course-training-institute",
        permanent: true,
      },
      {
        source:
          "/cloud&amp;devops/devops-online-course-training-institute",
        destination:
          "/cloud&devops/devops-online-course-training-institute",
        permanent: true,
      },
      {
        source:
          "/cloud&amp;devops/cloud-computing-and-devOps-certification-program",
        destination:
          "/cloud&devops/cloud-computing-and-devOps-certification-program",
        permanent: true,
      },
      {
        source:
          "/cloud&amp;devops/aws-cloud-computing-and-devOps",
        destination:
          "/cloud&devops/aws-cloud-computing-and-devOps",
        permanent: true,
      },


      {
        source:
          "/data-science-course/data-science-courses-in-hyderabad/>Data",
        destination:
          "/fullstack/dsa-course-training-bangalore",
        permanent: true,
      },


      {
        source:
          "/data-science-course-training-in-pune",
        destination:
          "/datascience/pune/data-science-course-training-in-pune",
        permanent: true,
      },
      {
        source:
          "/datascience/generative-ai-course-for-managers",
        destination:
          "/artificial-intelligence/generative-ai-course-for-data-science-professionals",
        permanent: true,
      },

      {
        source:
          "/data-science-course/terms-and-conditions",
        destination:
          "/terms-conditions",
        permanent: true,
      },

      {
        source:
          "/data-science-course/data-science-course/contact",
        destination:
          "/contact-us",
        permanent: true,
      },
      {
        source:
          "/data-science-course-training-in-mumb",
        destination:
          "/datascience/mumbai/data-science-course-training-in-mumbai",
        permanent: true,
      },
      {
        source:
        "/data-science-course/author/learnbay",
        destination:
        "/",
        permanent:true,
      }
      




     
      
      
    ];
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
