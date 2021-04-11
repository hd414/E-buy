const express = require('express');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const { createProduct } = require('../controllers/product');
// const { addCategory, getCategory } = require('../controllers/category');
const { auth, isAdmin } = require('../middleware/auth');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })

const router = express.Router();


router.post('/product/create', auth, isAdmin, upload.array('productPic'), createProduct)
// router.get('/category/get', getCategory)

module.exports = router;