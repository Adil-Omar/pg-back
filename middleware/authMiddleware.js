import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();
const authMiddleware = (req, res, next) => {
  const { token } = req.headers;
  
  

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "Not Authorized Login Again" });
  }
  
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        

    req.body.userId = token_decode.id || token_decode._id;
    next();
  } catch (error) {
    console.sta.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};
export default authMiddleware;
