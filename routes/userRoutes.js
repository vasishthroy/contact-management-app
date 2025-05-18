const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateToken");
const {
    registerUser, 
    loginUser, 
    currentUser
} = require("../controller/userController");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;