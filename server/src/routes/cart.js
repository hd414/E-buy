const express = require('express');
const { addToCart } = require('../controllers/cart');
const { auth, isUser } = require('../middleware/auth');


const router = express.Router();


router.post('/cart/add', auth, isUser, addToCart)
// router.get('/category/get', getCartItems)

module.exports = router;