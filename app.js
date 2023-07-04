import express from "express";
import { connectDB } from "./data/database.js";
import userRouter from "./routes/users.js";
import { config } from "dotenv";
config({
    path:"./data/config.env"
});
export const app = express();




//middleware
//always keep router below important middleware
// kyunki is case mein routers pehle the toh uski wajah se json ko read karne ka middle ware wala code bad mein execute hua express ki wajah se js ki wajah se nhi , jiski wajah se req.body destructure nhi ho pa raha tha 
app.use(express.json());
app.use("/users",userRouter);


app.get("/",(req,res)=>{
    res.send("server working ");
})


