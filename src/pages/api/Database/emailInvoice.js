// pages/api/submitForm.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const formData = req.body;

  try {
    await sendConfirmationEmail(formData);
    return res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

const sendConfirmationEmail = async (formData) => {
  // Use Nodemailer to send an email to the user
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure: true,
  });

  const userMailOptions = {
    from: "admissions@learnbay.co",
    to: formData.email,
    subject: 'Confirmation Email',
    html: `<div>Hi ${formData.name},</div><p>Greetings from Learnbay,</p><p>We have received your form submission.</p><p>For any clarifications or doubts, feel free to reach out to us on:</p><p><a href="mailto:contacts@learnbay.co">contacts@learnbay.co</a></p><p><a href="tel:+916363558632" target="_blank">+91 6363 558 632</a></p><p>Please find the attachments below.</p><p>Form Link:</p><p>Once you fill out the form, your learning manager will reach out to you over phone and email to help you out with further process.</p><p>We wish you all the very Best 👍</p><div>Thanks and Regards</div><div>Admissions Team</div><div>Note: Refunds and loan cancellation are not applicable beyond the 15-day payment period, regardless of the payment method used, including loan EMIs, full payments, or credit card EMIs.</div>`,
  };

  const backendMailOptions = {
    from: formData.email,
    to: "admissions@learnbay.co",
    subject: 'Confirmation Email for Backend',
    html: `<div>Hi Backend Team,</div><p>A new form has been submitted with the following details:</p><p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
  };

  try {
    // Send email to the user
    await transporter.sendMail(userMailOptions);
    console.log('User email sent.');

    // Send email to the backend team
    await transporter.sendMail(backendMailOptions);
    console.log('Backend email sent.');

    return Promise.resolve();
  } catch (error) {
    console.error("Error sending emails:", error);
    return Promise.reject(error);
  }
};

