import jwt from "jsonwebtoken";

const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET||"nWv491qqOWkZGMn5jIJLGprSh0rsQkURv2T1N3VC8Qg=", { expiresIn: "7d" });
  
  
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 *60* 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};

export default generateToken;
