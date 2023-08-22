const express = require("express");
const app = require("./app");
const PORT = 5000;

const journalEntry = require("./Models/journalEntryModel.js");

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
