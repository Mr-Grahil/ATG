const mongoose = require("mongoose")
require("dotenv").config()
const connectToDb = async(url)=>{
    await mongoose.connect(url);
}
// connectToDb(process.env.mongo_url)
module.exports = connectToDb