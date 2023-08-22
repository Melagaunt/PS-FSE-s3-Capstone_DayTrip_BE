const express = require("express");
const router = express.Router();

const {getJournalEntries} = require('../Controllers/journalEntry.controller.js')


router.get("/", getJournalEntries)

module.exports = router;