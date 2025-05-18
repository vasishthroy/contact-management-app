const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
    
        created_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Users"
        },
        
        name: {
            type: String,
            required: [true, "Please add the contact name."]
        },

        email: {
            type: String,
            required: [true, "Please add the contact email address."]
        },

        phone: {
            type: String,
            required: [true, "Please add the contact phone number."]
        },

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Contact", contactSchema);
