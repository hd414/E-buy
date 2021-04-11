const express = require('express');
const { addCategory, getCategory } = require('../controllers/category');
const { auth, isAdmin } = require('../middleware/auth');


const router = express.Router();


router.post('/category/create', auth, isAdmin, addCategory)
router.get('/category/get', getCategory)

module.exports = router;