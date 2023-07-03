import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";

const app = express();

app.use("/users",userRouter);
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017",{
       dbName:"NodeAPI"
}).then(()=>{console.log("db is connected");}).catch(e=> console.log(e))


app.get("/",(req,res)=>{
    res.send("server working ");
})



app.listen(4000,()=>{
     console.log("server  is working");
})