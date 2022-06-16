require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const headerToken = req.get("Authorization");
    console.log("linea 7", headerToken);
    if (!headerToken) {
      return res.status(401).json({ error: "Token not found!" });
    }

    const token = headerToken.replace("Bearer ", "");
    console.log("linea 13", token);

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user_id = decoded.user_id;

      next();
    } catch (error) {
      console.log(error);
      return res.status(401).send(error);
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};



module.exports = { verifyToken };
