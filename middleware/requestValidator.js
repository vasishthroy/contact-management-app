const checkId = (req, res) => {
    // One needs to be aware if the length of the id in mongodb 
    // increases after some set of records.
    if (req.param.id.length != 24) {
        req.status(400);
        throw new Error("ID is Invalid.");
    }
}

const checkMandatoryFields = (req, res) => {
    const {name, email, phone} = req.body;
    const fieldPresence = {"name": true, "email": true, "phone":true};
    const mandatoryFields = Object.keys(fieldPresence);
    let errString = "";
    
    for (let i = 0; i < mandatoryFields.length; i++) {
        if (!req.body[mandatoryFields[i]]) {
            fieldPresence[mandatoryFields[i]] = false;
            errString += `${mandatoryFields[i]} is not present.\n`;
        }
    }

    if (errString.length > 0) {
        res.status(400);
        throw new Error(errString);
    }
}

// TODO
const checkName = (req, res) => {

}

const checkEmail = (req, res) => {

}

const checkPhone = (req, res) => {

}



module.exports = {checkId, checkMandatoryFields};