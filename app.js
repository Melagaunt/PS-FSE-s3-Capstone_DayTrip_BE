const express = require ('express');
const journalEntryRoute = require('./Routes/journalEntry.routes.js');
const cors = require('cors');

const app = express ();

app.use(cors());

app.use('/journalentries', journalEntryRoute)




module.exports= app;