// api/src/functions/sendEmail.js
import nodemailer from 'nodemailer';

export const handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  // Configure the nodemailer transporter with your email provider's settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aaron.keating.lanc3@gmail.com',
      pass: 'V5fg6ppasDest28522?&g',
    },
  });

  // Email content
  const mailOptions = {
    from: 'aaron.keating.lanc3@gmail.com',
    to: 'info@thebarracks.ie',
    subject: 'New Booking',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
