// @desc Get all elements
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
}

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
    res.status(200).json({message: `Get ${req.params.id} from contacts`});
}

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
    const { name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    res.status(200).json({message: "Create contact"});
}

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact with ${req.params.id}`});
}

// @desc Update contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete ${req.params.id} from contacts`});
}

module.exports = {
    getContacts, 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact
};