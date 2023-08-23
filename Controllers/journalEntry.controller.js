const journalEntryModel = require('../Models/journalEntryModel')


const entries = [
	{
		_id: 1,
		title: "Some title",
		description: "blah balh",
		author: "Jones, Tiffany",
		skill: "Beginner",
		date: "1990-01-01",
	},
	{
		_id: 2,
		title: "Some title",
		description: "blah balh",
		author: "Jones, Tiffany",
		skill: "Beginner",
		date: "1990-01-01",
	},
];

async function getJournalEntries(req, res) {
	try {
		const journalEntries = await journalEntryModel.find({})
		console.log(journalEntries)
		if (journalEntries.length > 0) {
			res.status(200).json(journalEntries)
		}
	} catch (err) {
		res.status(500)
	}
};

module.exports = { getJournalEntries };


// get: function(resolve, reject){
// 	false.readFile(filName, (err, data) => {

// 	})