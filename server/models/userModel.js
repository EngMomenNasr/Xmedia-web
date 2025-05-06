import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      // إضافة حقل الـ refreshToken هنا
      type: String,
      default: null, // ممكن تخليه null في البداية
    },
    // حقول إضافية ممكن تضيفها
  },
  { timestamps: true }
);

// Middleware لتشفير كلمة المرور قبل الحفظ
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next(); // لو كلمة المرور متمش تعديلها، مش هنعمل تشفير تاني
  }

  try {
    const salt = await bcrypt.genSalt(10); // إنشاء Salt
    this.password = await bcrypt.hash(this.password, salt); // تشفير كلمة المرور باستخدام الـ Salt
    next();
  } catch (error) {
    return next(error);
  }
});

// طريقة لمقارنة كلمة المرور المدخلة بكلمة المرور المشفرة في قاعدة البيانات
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
