// controllers/refreshTokenController.js
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res
      .status(401)
      .json({ success: false, error: "Refresh token is required" });
  }

  try {
    // التحقق من الـ Refresh Token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // البحث عن المستخدم في قاعدة البيانات باستخدام الـ ID الموجود في الـ Refresh Token
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid refresh token" });
    }

    // إنشاء Access Token جديد
    const accessToken = generateAccessToken(user._id);

    res.json({ success: true, accessToken });
  } catch (error) {
    console.error("Refresh token error:", error);
    return res
      .status(403)
      .json({ success: false, error: "Invalid refresh token" }); // ممكن يكون 403 Forbidden هنا
  }
};

export { refreshToken };
