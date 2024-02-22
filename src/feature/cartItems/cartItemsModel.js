import UserModel from "../users/userModel.js";
export default class cartItemModel {
  constructor(productID, userID, quantity, id) {
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
    this.id = id;
  }
  static add(productID, userID, quantity) {
    const cartItem = new cartItemModel(
      productID,
      quantity,
      userID,
      cartItems.length + 1
    );
    cartItems.push(cartItem);

    return cartItem;
  }
  //fetch cart details for the specific user
  static fetchCartDetails(userID) {
    const cartDetails = cartItems.filter((p) => p.userID == userID.email);

    return cartDetails;
  }
  static delete(cartItemID) {
    const cartItemIndex = cartItems.findIndex((i) => i.id == cartItemID);

    if (cartItemIndex == -1) {
      return "Item not found";
    } else {
      cartItems.splice(cartItemIndex, 1);
    }
  }
}

var cartItems = [new cartItemModel(1, 2, 1, 1)];
