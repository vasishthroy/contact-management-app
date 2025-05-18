const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const {checkId, checkMandatoryFields} = require("../middleware/requestValidator");


const INVALID_ID = "ID is Invalid.";
const VALUE_NOT_FOUND = "Contact not found.";

/**
 * @desc Get all elements
 * @route GET /api/contacts
 * @access public
*/
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({created_by: req.user.id});
    res.status(200).json(contacts);
})

/**
 * @desc Get contact
 * @route GET /api/contacts/:id
 * @access private
 * @todo show contacts that only have been created by user
 */
const getContact = asyncHandler(async (req, res) => {
    if (!(req.params.id.length == 24)) {
        res.status(400);
        throw new Error(INVALID_ID);
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(VALUE_NOT_FOUND);
    }

    res.status(200).json(contact);
})

/**
 * @desc Create new contact
 * @route POST /api/contacts
 * @access private
 */
const createContact = asyncHandler(async (req, res) => {
    
    const { name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }

    const contact = await Contact.create({
        name, 
        email, 
        phone,
        created_by: req.user.id
    });
    res.status(200).json(contact);
    
})

/**
 * @desc Update contact
 * @route PUT /api/contacts/:id
 * @access private
 */
const updateContact = asyncHandler(async (req, res) => {
    // if (req.params.id.length != 25) {
    //     res.status(400);
    //     throw new Error(INVALID_ID);
    // }
    
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(VALUE_NOT_FOUND)
    } 
    
    if (contact.created_by.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User is not allowed to update contacts created by others.");
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    
    res.status(200).json(updatedContact);
})

/**
 * @desc Update contact
 * @route DELETE /api/contacts/:id
 * @access private
*/
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
        res.status(404);
        throw new Error(VALUE_NOT_FOUND);
    }

    if (contact.created_by.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User is not allowed to delete contacts created by others.");
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
})

module.exports = {
    getContacts, 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact
};