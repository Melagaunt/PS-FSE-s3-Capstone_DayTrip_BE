const express = require("express");
const router = express.Router();

const {
  listJournalEntries,
  postJournalEntries,
} = require("../Controllers/journalEntry.controller.js");

router.get("/", listJournalEntries);
router.post("/", postJournalEntries);

module.exports = router;
