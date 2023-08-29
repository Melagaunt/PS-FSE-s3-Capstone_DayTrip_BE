const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema ({
	_id: false,
	"uri": { type: String},
	"alt-text": { type: String}
})

const journalEntrySchema = new Schema({
  title: { type: String },
  description: { type: String },
  author: { type: String },
  skill: { type: String },
	date: { type: Date, default: Date.now() },
	image: { type: imageSchema}
});

module.exports = mongoose.model("journalentrie", journalEntrySchema);
