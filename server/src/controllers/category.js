const Category = require('../models/category');
const slugify = require('slugify');

exports.addCategory = async (req, res) => {


    let categoryUrl = "";



    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
    }

    if (req.file) {
        categoryUrl = req.file.filename;
        categoryObj.categoryImg = categoryUrl;
    }

    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId
    }

    const categ = new Category(categoryObj);

    try {
        const category = await categ.save();
        res.status(201).send(category);
    }
    catch (e) {
        res.status(400).send(e);
    }

}


const createCategoryRec = (categories, parentId = null) => {
    const categoryList = [];
    let Category;
    if (parentId == null) {
        Category = categories.filter((category) => category.parentId == undefined)
    }
    else {
        Category = categories.filter((category) => category.parentId == parentId)
    }

    for (let cat of Category) {
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat._slug,
            children: createCategoryRec(categories, cat._id)
        });
    }

    return categoryList;

}

exports.getCategory = async (req, res) => {

    try {
        const categories = await Category.find({});

        if (categories) {

            const categoryList = createCategoryRec(categories);
            return res.status(200).send({ categoryList });
        }


    }
    catch (e) {
        res.status(400).send(e);
    }


}

