const mongoose = require("mongoose")
const dbROOT = "mongodb://127.0.0.1:27017"
const dbName = "/DayTrip"
const dbPATH = dbROOT + dbName



async function connectToDb () {
	try {
		await mongoose.connect(dbPATH, { useNewUrlParser: true });
		console.log(`conn succes: ${dbPATH}`)
	} catch (err){
		console.error(err)
		process.exit(1)
	};		
}

module.exports = connectToDb
