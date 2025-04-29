require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("Server Running");
});

app.post("/api/contact", async (req, res) => {
  const { fullName, email, phone, requestType, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `رسالة جديدة من ${fullName}`,
    html: `
<div style="margin:0;width:100%;background-color:#f9f9f9;padding:20px 0;direction:rtl;font-family:'Cairo', sans-serif">
  <div style="max-width:600px;margin:auto;background-color:#ffffff;border-radius:15px;box-shadow:0 4px 10px rgba(0,0,0,0.1);overflow:hidden">
    
    <div style="background-color:#0f172b;padding:20px 30px;text-align:center">
      <h2 style="font-size:22px;color:#ffffff;margin:0">تم استلام رسالة جديدة من نموذج التواصل</h2>
    </div>

    <div style="padding:20px 30px;color:#333333">
      <p style="font-size:16px;margin-bottom:15px"><strong>الاسم:</strong> ${fullName}</p>
      <p style="font-size:16px;margin-bottom:15px"><strong>البريد الإلكتروني:</strong> ${email}</p>
      <p style="font-size:16px;margin-bottom:15px"><strong>رقم الهاتف:</strong> ${phone}</p>
      <p style="font-size:16px;margin-bottom:15px"><strong>نوع الطلب:</strong> ${requestType}</p>
      <p style="font-size:16px;margin-bottom:0"><strong>الرسالة:</strong></p>
      <p style="font-size:15px;margin-top:5px;line-height:1.8;color:#555555">${message}</p>
    </div>

    <div style="background-color:#ff1900;height:5px"></div>
  </div>
</div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "تم إرسال الرسالة بنجاح." });
  } catch (err) {
    console.error("Error sending email:", err); // لتسجيل الخطأ في الـ console
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
