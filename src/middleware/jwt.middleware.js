import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // 1. Read the token

  const token = req.headers["authorization"];

  // 2. If no token, return the error
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  // 3. Check if token is valid
  try {
    const payload = jwt.verify(token, "uqXyVyKUWCSHkJ7Zy68g4IqQMkPdoLRz");

    req.userID = payload;
    // 4. Call next middleware
    next();
  } catch (err) {
    // 5. Return error
    return res.status(401).send("unauthorized");
  }
};

export default jwtAuth;
