import userModel from "../users/userModel.js";
import productModel from "./productModel.js";
class productController {
  static getAllProducts(req, res) {
    const products = productModel.getAllProducts();
    res.status(200).send(products);
  }
  static addProduct(req, res) {
    const { name, desc, category, sizes, price } = req.body;
    const Product = new productModel({
      name: name,
      desc: desc,
      category: category,
      sizes: sizes.split(","), // Corrected method name to split()
      price: parseFloat(price), // Corrected method name to parseFloat()
      imageUrl: req.file.filename,
    });

    productModel.addProduct(Product);
    res.status(201).send(Product);
  }
  static filter(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    const result = productModel.filter(minPrice, maxPrice, category);
    return res.status(200).send(result);
  }
  static rateProduct(req, res) {
    const { userID, productID, rating } = req.query;

    const result = productModel.rateProduct(userID, productID, rating);
    if (result) {
      return res.status(200).send("success");
    } else {
      return res.status(400).send(result.message);
    }
  }
  static getOneProduct(req, res) {
    const { id } = req.params;
    const product = productModel.getProductById(id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send("product not found");
    }
  }
}

export default productController;
