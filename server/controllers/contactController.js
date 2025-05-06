import ContactMessage from "../models/contactMessage.js";
import mongoose from "mongoose";

const saveContactMessage = async (req, res) => {
  // ... الكود الخاص بـ saveContactMessage ...
  const { fullName, email, phone, requestType, message } = req.body;

  try {
    const newMessage = new ContactMessage({
      fullName,
      email,
      phone,
      requestType,
      message,
    });

    const savedMessage = await newMessage.save();

    res.status(201).json({
      success: true,
      message: "تم استلام رسالتك بنجاح.",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateContactMessageStatus = async (req, res) => {
  const { status, reason, interviewDate, interviewTime } = req.body; // استقبل الحقول الجديدة
  const { messageId } = req.params;
  const userId = req.user?.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(messageId)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid message ID." });
    }

    const updateFields = { status, reason };
    if (userId) {
      updateFields.respondedBy = userId;
    }

    // أضف تاريخ ووقت المقابلة لو الحالة هي "interviewScheduled" أو "accepted"
    if (status === "interviewScheduled" || status === "accepted") {
      if (!interviewDate || !interviewTime) {
        return res.status(400).json({
          success: false,
          error:
            "Please provide interview date and time when scheduling an interview.",
        });
      }
      updateFields.interviewDate = interviewDate;
      updateFields.interviewTime = interviewTime;
    } else if (status === "rejected") {
      // اختياري: ممكن تتأكد من وجود سبب للرفض
      if (!reason) {
        return res.status(400).json({
          success: false,
          error: "Please provide a reason for rejection.",
        });
      }
    }

    const updatedMessage = await ContactMessage.findByIdAndUpdate(
      messageId,
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updatedMessage) {
      return res
        .status(404)
        .json({ success: false, error: "Message not found." });
    }

    res.status(200).json({
      success: true,
      message: "تم تحديث حالة الرسالة بنجاح.",
      data: updatedMessage,
    });
  } catch (err) {
    console.error("Error updating message status:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// دالة جلب جميع الرسائل
const getAllContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 }); // جلب الرسائل وترتيبها حسب تاريخ الإنشاء (الأحدث أولاً)
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export {
  saveContactMessage,
  updateContactMessageStatus,
  getAllContactMessages,
};
