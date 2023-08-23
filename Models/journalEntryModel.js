const mongoose = require("mongoose");
const { Schema } = mongoose;

const journalEntrySchema = new Schema({
	title: { type: String },
	description: { type: String },
	author: { type: String },
	skill: { type: String },
	date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("journalEntries", journalEntrySchema);
 