import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  }); // صلاحية أطول للـ Refresh Token
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // التحقق من وجود مستخدم بنفس الاسم أو الإيميل
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    // إنشاء مستخدم جديد
    const user = await User.create({
      username,
      email,
      password, // كلمة المرور هيتم تشفيرها تلقائيًا بواسطة الـ Middleware في الـ Model
    });

    if (user) {
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        _id: user._id,
        username: user.username,
        email: user.email,
        // ممكن نرجع توكن هنا بعد التسجيل لو حابين
      });
    } else {
      res.status(400).json({ success: false, error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(500)
      .json({ success: false, error: "Server error during registration" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // البحث عن المستخدم بالـ username
    const user = await User.findOne({ username });

    // لو المستخدم موجود وكلمة المرور صحيحة
    if (user && (await user.comparePassword(password))) {
      const accessToken = generateAccessToken(user._id);
      const refreshToken = generateRefreshToken(user._id);

      // حفظ الـ Refresh Token في قاعدة البيانات (تأكد أن لديك حقل refreshToken في الـ User Model)
      user.refreshToken = refreshToken;
      await user.save();

      res.json({ success: true, accessToken, refreshToken }); // إرجاع الـ Access Token والـ Refresh Token
    } else {
      res.status(401).json({ success: false, error: "Invalid credentials" }); // بيانات اعتماد غير صحيحة
    }
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ success: false, error: "Server error during login" });
  }
};

export { loginUser, registerUser };
