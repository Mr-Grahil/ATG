const Task = require("../DB/model")
const postData = async(req,res)=>{
   try{ 
     data = await Task.create(req.body)
    res.json(data);
    console.log(data)
}
    catch(err){
        console.log(err);
    }
// console.log(req.body)
// res.send(req.body);
}
module.exports = postData;