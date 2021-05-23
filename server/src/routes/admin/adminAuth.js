const express = require('express');
const { signIn, signUp, signOut } = require('../../controllers/admin/adminAuth');
const { auth, isAdmin } = require('../../middleware/auth');
const { isValid, validationsSignUp, validationsSignIn } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signin', validationsSignIn, isValid, signIn);


router.post('/admin/signup', validationsSignUp, isValid, signUp);

router.post('/admin/signout', auth, signOut);


module.exports = router;