const express = require("express");
const router = express.Router();

const {
  listJournalEntries,
} = require("../Controllers/journalEntry.controller.js");

router.get("/", listJournalEntries);

module.exports = router;
