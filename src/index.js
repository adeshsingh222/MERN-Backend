const express = require("express")
const mongoose =require("mongoose");

const cors = require("cors");
const todoModel =require ('./todoModel.js')
const app = express();
app.use(express.json());
mongoose.set('strictQuery', false)
app.use(cors());

mongoose.connect(
   "mongodb+srv://Adesh:LnDEhxK0maoDwQD9@cluster0.r3pzigx.mongodb.net/group54Database",{
    useNewUrlParser:true,
   }
)
.then(()=>console.log("Mongo Db is connected"))
.catch((err)=>console.log(err))

app.post('/create-post',async function(req,res){
    let data = req.body;
    console.log(data);
    let createData= await todoModel.create(data)
    res.status(200).send({status:true, data:createData})
    
})


app.listen(3999, ()=> console.log("server connected at port ", 3999 ))






