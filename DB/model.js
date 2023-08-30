const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    about:String,
    bio:String,
    location:String,
    url:String,
    followerCount:String,
    connections:String
})
module.exports = mongoose.model('link',schema);