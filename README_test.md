This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

//form function
// const getEndPoint = () => {
// let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
// if (event) {
// endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
// }

// if (router.pathname === "/organic") {
// endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
// }

// if (router.pathname === "/referrals") {
// endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
// }

// if (
// router.pathname === "/learning-learnbay" ||
// router.pathname === "/learning-learnbay-select"
// ) {
// endPoint = "https://getform.io/f/fd68bf82-a911-435e-9719-7c134a89a731";
// }
// if (router.pathname === "/resume-builder") {
// endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
// }
// return endPoint;
// // ... (Logic to determine the endpoint based on the router)
// };

// const redirectionThankYou = () => {
// let routerPath = "";
// if (router.pathname === "/learning-learnbay") {
// routerPath = "/learning-learnbay-select";
// }
// if (router.pathname === "/learning-learnbay-select") {
// routerPath = "/Thank-you-counselling";
// }
// if (router.pathname === "resume-builder") {
// routerPath = "Thank-you-counselling";
// }
// if (fullStack) {
// routerPath = "/Thank-you-fsd";
// }
// if (event) {
// routerPath = "/event/Thank-You-event";
// }
// if (dataScience) {
// routerPath = "/Thank-you";
// }
// if (dataScienceGeneric) {
// redirection();
// }
// if (dataScienceCounselling) {
// routerPath = "/Thank-you-counselling";
// }
// if (router.pathname === "/organic" || router.pathname === "/referrals") {
// setToggle(false);
// setAlertMSG("Form Submitted successfully");
// }
// if (router.pathname === "/Thank-you") {
// setToggle(false);
// setAlertMSG("Form Submitted successfully");
// }
// return routerPath;
// };

// const getValidation = () => {
// if (
// radio === true &&
// (interstedInHide === false || interstedInHide === undefined)
// ) {
// if (query.interstedIn === "Interested In") {
// setError(true);
// return false;
// } else if (query.interstedIn === "") {
// setError(true);
// return false;
// } else if (query.platform === "Select an option") {
// setError(true);
// return false;
// } else if (query.platform === "") {
// setError(true);
// return false;
// } else {
// setError(false);
// return true;
// }
// } else if (
// interstedInHide === true &&
// (radio === undefined || radio === false)
// ) {
// setError(false);
// return true;
// } else if (
// interstedInHide === false ||
// interstedInHide === undefined ||
// radio === false ||
// radio === undefined
// ) {
// if (query.interstedIn === "Interested In") {
// setError(true);
// return false;
// } else if (query.interstedIn === "") {
// setError(true);
// return false;
// } else {
// setError(false);
// return true;
// }
// }
// };
