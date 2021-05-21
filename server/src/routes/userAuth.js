const express = require('express');
const { signUp, signIn, signOut } = require('../controllers/userAuth');
const { auth, isUser } = require('../middleware/auth');
const { validationsSignUp, validationsSignIn, isValid } = require('../validators/auth');
const router = express.Router();


router.post('/signin', validationsSignIn, isValid, signIn);


router.post('/signup', validationsSignUp, isValid, signUp);

router.post('/signout', auth, isUser, signOut);


router.post('/profile', auth, (req, res) => {
    res.send(req.user);
})

module.exports = router;