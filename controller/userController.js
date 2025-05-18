const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const userModel = require("../models/userModel");


/**
 * @desc Register a new user to be able to access the contact info
 * @route POST /api/users/register 
 * @access public  
 */
const registerUser = asyncHandler(async (req, res) => {
    
    if (!req.body) {
        res.status(400);
        throw new Error("Request body not added.");
    }
    
    const {name, email, password} = req.body;
    console.log(name, email, password);
    // Validate all required fields are present
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Kindly enter all required fields.");
    }

    const idAvailable = await User.findOne({email});
    
    // Check if email address is already used
    if (idAvailable) {
        res.status(403);
        throw new Error("Email address already in use");
    }

    // Hash the password for it to be saved in the database
    const hashedPass = await bcrypt.hash(password.toString(), 10);

    const userRecord = User.create({name, email, password: hashedPass});

    // Create a new record with user details in the database
    if (userRecord) {
        res.status(201).json(userRecord);
        
    } else {
        res.status(400);
        throw new Error("Could not register user");
    }
})

/**
 * @desc Used to login and verify the user is valid
 * @route POST /api/users/login
 * @access public
 */
const loginUser = asyncHandler(async (req, res) => {
    
    if (!req.body) {
        res.status(400);
        throw new Error("Request body not added.");
    }

    const {email, password} = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Payload is empty.");
    }
    
    const user = await User.findOne({email});
    
    if (user && (await bcrypt.compare(password.toString(), user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.name,
                email: user.email,
                id: user.id
            }
            }, process.env.ACCESS_TOKEN_SECRET,
            {"expiresIn": "20m"}
        );
        res.status(200).json({accessToken});
    }
    
    
    
})

/**
 * @desc Get all elements
 * @route GET /api/users/current
 * @access private
 */
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}