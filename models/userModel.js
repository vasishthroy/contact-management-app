const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please choose the username."],
        },
        email: {
            type: String,
            required: [true, "Please choose the email address."],
            unique: [true, "Email address already exists. "]
        },

        password: {
            type: String,
            required: [true, "Please create your account password."]
        }
    }, {
        timestamp: true
    }
);

module.exports = mongoose.model("Users", userSchema);