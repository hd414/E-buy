const shortid = require('shortid');
const Product = require('../models/product');
const slugify = require('slugify');

exports.createProduct = async (req, res) => {
    // res.status(200).send({ file: req.files, body: req.body })
    const { name, price, description, category, createdBy, offers, quantity } = req.body;

    let pictures = [];

    if (req.files.length > 0)
        pictures = req.files.map((file) => ({ img: file.filename }))

    const product = new Product({
        name, price, description, pictures, category,
        createdBy: req.user._id,
        slug: slugify(name),
        offers, quantity
    })

    try {
        const pro = await product.save();
        res.status(201).send(pro);
    }
    catch (e) {
        res.status(400).send(e);
    }
}