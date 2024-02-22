import cartItemsModel from "./cartItemsModel.js";
import UserModel from "../users/userModel.js";

export default class cartItemsController {
  static add(req, res) {
    const { productID, quantity } = req.query;
    //modify jwt token , get the userID, from the req
    const user = UserModel.getAll().find((u) => u.email == req.userID.email);

    if (user) {
      cartItemsModel.add(productID, quantity, user.email);
      res.status(201).send("Cart is updated");
    } else {
      res.status(404).send("user not logged in");
    }
  }
  static fetchCartDetails(req, res) {
    const { userID } = req;
    console.log(userID);
    const cartDetails = cartItemsModel.fetchCartDetails(userID);
    return res.status(200).send(cartDetails);
  }
  static delete(req, res) {
    const userID = req.userID;
    const cartItemID = req.params.id;
    cartItemsModel.delete(userID, cartItemID);
  }
}
