const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080
mongoose.connect("mongodb://localhost:27017/UmerData",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection success");
}).catch((err)=>{
    console.log(err);
})
app.get("/",(req,res)=>{
    res.send("HY")
})
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({credentials: true, origin:'http://localhost:3000'}));
//user Schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const UserDb = mongoose.model("UserDb",UserSchema)
app.post("/Data",(req,res)=>{
    console.log("run");
        try{
    
        const Data = new UserDb({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        })
        Data.save().then(()=>{console.log("Saved"); res.json("Done")});
        }
        catch(err)
        {
            res.json("error")
            console.log(err)
        }
    
    })
    if(process.env.NODE_ENV =="production"){
        app.use(exoress.static("Backend/build"));
    }

app.listen(PORT,console.log(`app is runing on the localhost ${PORT}`));