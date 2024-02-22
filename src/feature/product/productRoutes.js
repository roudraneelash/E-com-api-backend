import express from "express";
import productController from "./productController.js";
import { upload } from "../../middleware/fileupload.js";

const productRouter = express.Router();
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getOneProduct);
// GET filtered products
productRouter.get("/filter", productController.filter);
productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
productRouter.post("/rating", productController.rateProduct);
export default productRouter;
