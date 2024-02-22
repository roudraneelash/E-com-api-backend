import ApplicationError from "../../error-handling/ApplicationError.js";
import userModel from "./userModel.js";
import jwt from "jsonwebtoken";

class userController {
  static signUp(req, res) {
    const { name, email, password, type } = req.body;
    const newUser = userModel.SignUp(name, email, password, type);
    res
      .status(201)
      .json({ message: "User signed up successfully", user: newUser });
  }

  static signIn(req, res) {
    const { email, password } = req.body;
    const user = userModel.SignIn(email, password);
    if (user) {
      //1.create token
      const token = jwt.sign(
        {
          email: user.email,
        },
        "uqXyVyKUWCSHkJ7Zy68g4IqQMkPdoLRz",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).send(token);
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  }
  static getAll(req, res) {
    const users = userModel.getAll();
    // if (users) {
    return res.status(200).send(users);
    // } else {
    //   throw new ApplicationError("No user found", 400);
    // }
  }
}

export default userController;
