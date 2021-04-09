const express = require('express');
const { signIn, signUp } = require('../../controllers/admin/adminAuth');
const { isValid, validationsSignUp, validationsSignIn } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signin', validationsSignIn, isValid, signIn);


router.post('/admin/signup', validationsSignUp, isValid, signUp);


module.exports = router;