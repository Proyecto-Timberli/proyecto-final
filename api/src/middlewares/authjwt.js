require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  /** 
   * Middleware verifica siexiste token de usuario de la aplicación
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
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user_id = decoded.user_id;  

      next(); // sale del middleware, ahora la request tiene el id del usuario

      // de querer añadir más atributos a la request, recordar añadirlos en
      // la ruta de login, token actual solo envia user_id y email encriptados

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
