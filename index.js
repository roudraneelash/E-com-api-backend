import express from "express";
import loggerMiddleware from "./src/middleware/logger.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import productRouter from "./src/feature/product/productRoutes.js";
import userRouter from "./src/feature/users/userRoutes.js";
import cartItemsRouter from "./src/feature/cartItems/cartItemRoutes.js";
import ApplicationError from "./src/error-handling/ApplicationError.js";

const PORT = 8080;
const server = express();

server.use(express.json());
server.use(loggerMiddleware);
//handle default errors

server.use("/api/product", jwtAuth, productRouter);
server.use("/api/user", userRouter);
server.use("/api/cart", jwtAuth, cartItemsRouter);

// handle 404 reqs
server.use((err, req, res, next) => {
  // console.error(err); // Log the error
  if (err instanceof ApplicationError) {
    res.status(err.code).send(err.message);
  }
  res.status(503).send("Something is wrong from our end"); // Send an error response
});
server.use((req, res) => {
  res.status(404).send("API not found");
});

server.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
