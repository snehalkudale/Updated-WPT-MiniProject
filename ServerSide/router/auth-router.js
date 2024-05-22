const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller')


router.route('/').get(authcontrollers.home);

router.route('/register').post(authcontrollers.register);
router.route('/login').post(authcontrollers.login);

router.route('/user/:id').put(authcontrollers.update);

router.route('/user/:id').delete(authcontrollers.deleteUser);

router.route('/users').get(authcontrollers.getAllUsers);

router.route('/forgotPassword').put(authcontrollers.forgotPassword);

module.exports = router;