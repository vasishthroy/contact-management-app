const asyncHandler = require("express-async-handler");


const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "Hola"});
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login"});
})

const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current"});
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}