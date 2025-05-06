import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const contactMessageSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    requestType: { type: String },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "interviewScheduled"], // إضافة حالة جديدة
      default: "pending",
      required: true,
    },
    reason: { type: String },
    respondedBy: {
      type: ObjectId,
      ref: "User",
    },
    interviewDate: { type: Date }, // حقل لتاريخ المقابلة
    interviewTime: { type: String }, // حقل لوقت المقابلة
  },
  { timestamps: true }
);

const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessage;
