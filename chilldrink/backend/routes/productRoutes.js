const express = require("express");
const router = express.Router();

const { getProduct,postProduct,updateProduct,deleteProduct} = require("../controller/productController");

router.get('/product', getProduct)
router.post('/product', postProduct)
router.post('/product/:id', updateProduct)
router.post('/product/:id', deleteProduct)

module.exports = router;