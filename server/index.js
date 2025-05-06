import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contact.js";
import authRoutes from "./routes/authRoute.js"; // استيراد ملف الـ authRoutes
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/api/contact", contactRoutes); // تعديل المسار ليكون أكثر وضوحًا لـ contact
app.use("/api/auth", authRoutes); // ربط الـ authRoutes بمسار /api/auth

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
