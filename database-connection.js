const mongoose= require ("mongoose")
const dbROOT = "mongodb://127.0.0.1:27017"
const dbName = "/DayTrip"
const dbPATH = dbROOT + dbName


const connectToDb=()=>{mongoose.connect(dbPATH,{useNewUrlParser:true})}

module.exports= connectToDb
    
    
    
    
    
    
    