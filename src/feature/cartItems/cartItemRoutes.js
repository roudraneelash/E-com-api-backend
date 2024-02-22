import express from "express";
import cartItemsController from "./cartItemsController.js";

const cartItemsRouter = express.Router();

cartItemsRouter.post("/", cartItemsController.add);
cartItemsRouter.get("/fetchCartDetails", cartItemsController.fetchCartDetails);

export default cartItemsRouter;
