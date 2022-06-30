require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require('../db.js');

const verifyToken = async (req, res, next) => {
  /** 
   * Middleware verifica si existe token de usuario de la aplicación
   * y asigna el id del usuario a la request
   * 
   * ojo: solo verifica que tenga token, no que tipo de usuario es
   */

  try {
    const headerToken = req.get("Authorization");

    if (!headerToken) {
      return res.status(401).json({ error: "No tienes autorización" });
    }

    const token = headerToken.replace("Bearer ", "");

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      console.log(decoded);
      if (decoded.user_type === "suspended") {

        req.user_id = decoded.user_id;

        return res.status(401).json({ error: "No tienes autorización, estas suspendido" });

      } else {
        return next();
      }

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