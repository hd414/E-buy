const express = require('express');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const { addCategory, getCategory } = require('../controllers/category');
const { auth, isAdmin } = require('../middleware/auth');


const router = express.Router();




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/category'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })

router.post('/category/create', auth, isAdmin, upload.single('categoryImg'), addCategory)
router.get('/category/get', getCategory)

module.exports = router;