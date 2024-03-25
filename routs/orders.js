import express from "express"
import { getAllOrders, addOrder, deleteOrder, updateOrder, getOrdersByDate, getOrdersByProducts } from "../controllers/orders.js"
const router = express.Router()

router.get('/', getAllOrders)
router.post('/', addOrder)
router.delete('/:id', deleteOrder)
router.patch('/:id', updateOrder)
router.get('/date/:date', getOrdersByDate)
router.get('/product/:product', getOrdersByProducts)

export default router