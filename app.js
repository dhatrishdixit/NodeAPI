import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";

const app = express();

//always keep router below important middleware
// kyunki is case mein routers pehle the toh uski wajah se json ko read karne ka middle ware wala code bad mein execute hua express ki wajah se js ki wajah se nhi , jiski wajah se req.body destructure nhi ho pa raha tha 
app.use(express.json());
app.use("/users",userRouter);

mongoose.connect("mongodb://127.0.0.1:27017",{
       dbName:"NodeAPI"
}).then(()=>{console.log("db is connected");}).catch(e=> console.log(e))


app.get("/",(req,res)=>{
    res.send("server working ");
})



app.listen(4000,()=>{
     console.log("server  is working");
})