import express from "express";
import { getAllProducts,getProductByID, addProduct, deleteProduct, updateProduct } from "../controllers/products.js";
const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id',getProductByID)
router.post('/',addProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)

export default router