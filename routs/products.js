import express from "express";
// Import all product related functions from the products controller
import { getAllProducts,getProductByID, addProduct, deleteProduct, updateProduct } from "../controllers/products.js";
const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id',getProductByID)
router.post('/',addProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)

export default router