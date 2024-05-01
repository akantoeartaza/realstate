// profileRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getProfile, editProfile } = require('../controllers/profileController');



// Profile routes
router.get('/', authMiddleware,getProfile); // Fetch and render profile page
router.put('/',authMiddleware, editProfile); // Handle editing user's information

module.exports = router;
