import express from "express";
const router = express.Router();
import ProductController from "./controller.js"

router
  .route("/")
  .get(ProductController.getAllProducts)
  .post(ProductController.createProduct);

router.get("/by-category", ProductController.getProductsByCategory)

router
  .route("/:id")
  .get(ProductController.getProductById)
  .patch(ProductController.updateProduct)
  .delete(ProductController.deleteProduct);

export default router
