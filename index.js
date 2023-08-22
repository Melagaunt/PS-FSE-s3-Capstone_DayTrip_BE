const express = require("express");
const app = require("./app");
const PORT = 5000;
const connectToDb= require('./database-connection')

connectToDb()


app.listen(PORT, () => console.log(`server started on port ${PORT}`));