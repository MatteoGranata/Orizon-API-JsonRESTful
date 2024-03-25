import express from "express";
import { getAllProducts, addProduct, deleteProduct, updateProduct } from "../controllers/products.js";
const router = express.Router()

router.get('/', getAllProducts)
router.post('/',addProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)

export default router