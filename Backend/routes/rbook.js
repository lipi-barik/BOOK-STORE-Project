const express = require('express');
const { addbook, getbookById, getsinglebookById, deletebookById, updatebookById } = require('../controller/cbook');

const router = express.Router();

router.post("/",addbook);
router.get("/",getbookById);
router.get("/:id",getsinglebookById);
router.put("/:id",updatebookById);
router.delete("/:id",deletebookById);

module.exports =router;