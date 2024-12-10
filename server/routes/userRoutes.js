const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getAllUsers,
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);

module.exports = router;
