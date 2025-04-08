const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
}

const getContact = (req, res) => {
    res.status(200).json({message: `Get ${req.params.id} from contacts`});
}

const createContact = (req, res) => {
    res.status(200).json({message: "Create contact"});
}
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact with ${req.params.id}`});
}
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