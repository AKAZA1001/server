const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { signup, login } = require('../controllers/auth');

router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  signup
);
router.post('/login', login);

module.exports = router;
