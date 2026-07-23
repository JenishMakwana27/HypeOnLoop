const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "marketing@hypeonloop.com",
    pass: "hxfb tnuq yspv qzya",
  },
});

exports.sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate(async (snap) => {
    const data = snap.data();

    const serviceMap = {
      meme: "Meme Marketing & Seeding",
      pr: "PR Publishing & Campaigns",
      twitter: "Twitter Trending",
      influencer: "Influencer Marketing",
      imdb: "IMDb & BMS Optimization",
      podcast: "Podcast & Music Promo",
      other: "Other / Consultation",
    };

    const mailOptions = {
      from: "marketing@hypeonloop.com",
      to: "marketing@hypeonloop.com",
      subject: `New Inquiry from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #14b8a6;">New Campaign Inquiry!</h2>
          <hr/>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Service:</strong> ${serviceMap[data.service] || data.service}</p>
          <p><strong>Message:</strong> ${data.message}</p>
          <hr/>
          <p style="color: #666;">Submitted at: ${new Date().toLocaleString("en-IN")}</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent to marketing@hypeonloop.com");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });