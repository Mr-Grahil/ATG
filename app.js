const express = require("express")
var cors = require('cors')
const app = express();
const postData = require("./Controller/function")
const port = 5000;
const connectToDb = require("./DB/connect")
app.use(express.json())
require("dotenv").config()
app.use(cors())
app.post("/api/v1/project",postData);
app.get("/api/v1/project",(req,res)=>{
    res.json({name:"Pratik",status:"working"})
});


async function start(url){
    await connectToDb(process.env.mongo_url);
    app.listen(port,console.log(`The server is listening on the port ${port}...`))

}
start(process.env.mongo_url);
// app.listen(port,console.log("server is listening on the port 5000...."))