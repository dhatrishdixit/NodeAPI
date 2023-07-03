import express from "express";
import mongoose, { Schema } from "mongoose";
const app = express();

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017",{
       dbName:"NodeAPI"
}).then(()=>{console.log("db is connected");}).catch(e=> console.log(e))

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = mongoose.model("user",userSchema);

app.get("/",(req,res)=>{
    res.send("server working ");
})



app.post("/users/new",async (req,res)=>{

    const {name,email,password} = req.body;
     await  User.create({
       name,
       email,
       password
    });
    
    res.status(201).cookie("token","check",{
        httpOnly:true,
        // write expires
    }).json({
        success:true,
        message:"registered successfully"
    });
   
})

// using queries 
app.get("/users/all",async (req,res)=>{
    console.log(req.query);
    console.log(typeof req);
    // req and response are provided with object arguments , matlab woh actuaclly mein object hote hai 
    const {name ,email} = req.query;
    const users = await User.find({
        // name:"dhatrish" keeping it blank will give us all the elements present in db
        name,email
    });
    

    res.json({
        succeess:true,
        users:users
    });

})

app.get("/users/name/special",(req,res)=>{
    res.json({
        success:true,
        message:"lol no one is special here everyone is treated equally "
    })
})

//using params , dynamic route should be kept at last or atleast lower than static routes 
app.get("/users/name/:uName",async (req,res)=>{
       const user = await User.find({name : req.params.uName});
       res.status(201).json({
            success:true,
            userInfo:user
       })
})


app.listen(4000,()=>{
     console.log("server  is working");
})