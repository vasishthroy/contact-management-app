const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({message: "Get all contacts"})
})

router.route("/").post((req, res) => {
    res.status(200).json({message: "Create contact"})
})

router.route("/:id").get((req, res) => {
    res.status(200).json({message: `Get ${req.params.id} from contacts`})
})

router.route("/:id").put((req, res) => {
    res.status(200).json({message: `Update contact with ${req.params.id}`})
})

router.route("/:id").delete((req, res) => {
    res.status(200).json({message: `Delete ${req.params.id} from contacts`})
})

module.exports = router;