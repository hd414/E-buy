const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.auth = async (req, res, next) => {

    try {
        const token = req.header('Authorization').split(' ')[1];

        if (!token)
            throw new Error();

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decode._id });

        if (!user)
            throw new Error();

        req.user = user;
        req.token = token;

        next();

    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}


exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(200).send({ error: 'access denied...' });
    }
    next();
}

exports.isUser = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(200).send({ error: 'access denied...' });
    }
    next();
}