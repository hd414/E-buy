const { check, validationResult } = require("express-validator")

exports.validationsSignUp = [
    check('firstName')
        .notEmpty()
        .withMessage('firstName is required'),
    check('lastName')
        .notEmpty()
        .withMessage('lastname is required'),
    // check('username')
    //     .notEmpty()
    //     .withMessage('username is required'),
    check('email')
        .notEmpty()
        .isEmail()
        .withMessage('valid email is required'),
    check('password')
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage('valid password is required'),
]


exports.validationsSignIn = [
    check('email')
        .notEmpty()
        .isEmail()
        .withMessage('valid email is required'),
    check('password')
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage('valid password is required'),
]




exports.isValid = (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).send({ error: error.array()[0].msg });
    }
    next();
}