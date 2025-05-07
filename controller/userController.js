const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const user = require("../models/userModel");

// @desc POST all elements
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400);
        throw new Error("Request body not added.");
    }
    
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Kindly enter all required fields.");
    }

    const idAvailable = await user.findOne({email});

    if (idAvailable) {
        res.status(404);
        throw new Error("Email address already in use");
    }
    const hashedPass = await bcrypt.hash(password.toString(), 10);

    const userRecord = user.create({name, email, password: hashedPass});

    if (userRecord) {
        res.status(201).json({message: `${name} ${email} ${password}`});
    } else {
        res.status(400);
        throw new Error("Could not register user");
    }
})

// @desc POST all elements
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login"});
})

// @desc Get all elements
// @route GET /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current"});
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}