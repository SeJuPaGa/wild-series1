const express = require("express");
const { browse, read } = require("../../../controllers/categoryActions");

const router = express.Router();

// Route to browse all categories
router.get("/", browse);

// Route to read a category by ID
router.get("/:id", read);

module.exports = router;
