import userModel from "../users/userModel.js";

export default class productModel {
  constructor(ID, name, description, imageURL, category, price, sizes) {
    this.id = ID;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }
  static getAllProducts() {
    return products;
  }
  static addProduct(product) {
    product.id = products.length + 1;
    products.push(product);
  }
  static getProductById(id) {
    return products.find((product) => product.id == id);
  }
  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });

    return result;
  }
  static rateProduct(userID, productID, rating) {
    const user = userModel.getAll().find((u) => u.id == userID);

    if (!user) {
      return "User not found";
    }

    const product = productModel
      .getAllProducts()
      .find((p) => p.id == productID);

    if (!product) {
      return "Product not found";
    }

    // Ensure product.ratings is an array
    if (!Array.isArray(product.ratings)) {
      product.ratings = [];
    }

    // Check if user has already rated the product
    const userRatingIndex = product.ratings.findIndex(
      (r) => r.userID === userID
    );

    if (userRatingIndex !== -1) {
      // Update existing rating
      product.ratings[userRatingIndex].rating = rating;
    } else {
      // Add new rating
      product.ratings.push({ userID, rating });
    }

    // Optionally, you can return a success message or the updated product
    return { success: true, message: "Rating updated successfully" };
  }
}
let products = [
  {
    id: 0,
    name: "Product 1",
    desc: "Description for Product 1",
    sizes: ["M", "S", "L"],
    imageUrl:
      "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    category: "Category1",
    price: 19.99,
  },
  {
    id: 1,
    name: "Product 2",
    desc: "Description for Product 2",
    sizes: ["M", "S", "L"],
    imageUrl:
      "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    category: "Category2",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product ",
    desc: "Description for Product 2",
    sizes: ["M", "S", "L"],
    imageUrl:
      "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
    category: "Category2",
    price: 29.99,
  },
];
