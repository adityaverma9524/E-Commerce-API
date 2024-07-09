// Manage routes/paths to productController

// 1. Import Express
import express from "express";
import ProductController from "./product.controller.js";

// 2. Initialize express router
const ProductRouter = express.Router();

const productController = new ProductController();

// All the paths to controllers methods
// localhost:3200/api/products
ProductRouter.get('/', productController.getAllProducts);
ProductRouter.post('/', productController.addProduct);

export default ProductRouter;