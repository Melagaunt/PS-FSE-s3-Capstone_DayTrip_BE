const journalEntryModel = require("../Models/journalEntryModel");

async function listJournalEntries(req, res) {
  try {
    const journalEntries = await journalEntryModel.find({}).exec();
    console.log(journalEntries);
    if (journalEntries.length > 0) {
      res.status(200).json(journalEntries);
    }
  } catch (err) {
    res.status(500);
  }
}

module.exports = { listJournalEntries };

// get: function(resolve, reject){
// 	false.readFile(filName, (err, data) => {

// 	})
