const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");   

// @desc Get all elements
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
})

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get ${req.params.id} from contacts`});
})

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone} = req.body;
    console.log(req.body);
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const contact = await Contact.create({name, email, phone});

    res.status(200).json({message: "Create contact"});
    
})

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update contact with ${req.params.id}`});
})

// @desc Update contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete ${req.params.id} from contacts`});
})

module.exports = {
    getContacts, 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact
};