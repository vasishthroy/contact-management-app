const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT;


app.use("/api/contacts", require("./routes/contactRoutes"))

app.listen(port, () => {
    console.log("This is a server.");
    console.log(port)
})
