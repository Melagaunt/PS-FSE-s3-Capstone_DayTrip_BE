const journalEntryModel = require("../Models/journalEntryModel");

async function listJournalEntries(req, res) {
  try {
    const journalEntries = await journalEntryModel.find({}).exec();

    if (journalEntries.length > 0) {
      res.status(200).json(journalEntries);
    }
  } catch (err) {
    res.status(500);
  }
}

async function postJournalEntries(req, res) {
  const data = req.body;
  const newEntry = await journalEntryModel.create(data);
  res.status(200).json(newEntry);
}

module.exports = { listJournalEntries, postJournalEntries };
