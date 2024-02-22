import userModel from "../feature/users/userModel.js";

const basicAuthorizer = (req, res, next) => {
  //1. Check if authorization header is empty
  const authHeader = req.headers["authorization"]; // Corrected spelling
  // console.log(authHeader);
  if (!authHeader) {
    return res.status(401).send("No authorization details found");
  }

  //2. Extract credentials. [Basic qwerty4286b2nrf8rby]
  const base64Credentials = authHeader.replace("Basic ", "");

  //3. Decode credentials
  const decodedCreds = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  // console.log(decodedCreds);
  const creds = decodedCreds.split(":");
  // console.log(creds);
  //4. Check if user exists
  const user = userModel
    .getAll()
    .find((u) => u.email === creds[0] && u.password === creds[1]);

  if (user) {
    next();
  } else {
    return res.status(401).send("Invalid credentials");
  }
};

export default basicAuthorizer;
