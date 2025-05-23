import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error("Authentication failed:", error);
      res
        .status(401)
        .json({ success: false, error: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, error: "Not authorized, no token" });
  }
};

export { authMiddleware };
