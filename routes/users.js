import express from "express";
import { User } from "../models/users.js";



const router = express.Router();


router.post("/new",async (req,res)=>{

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
router.get("/all",async (req,res)=>{
    console.log(req.query);
    console.log(typeof req);
    // req and response are provided with object arguments , matlab woh actuaclly mein object hote hai 
    const {name ,email} = req.query;
    const users = await User.find({
        // name:"dhatrish" keeping it blank will give us all the elements present in db
        name,email
    });
    

    res.json({
        success:true,
        users:users
    });

})

router.get("/name/special",(req,res)=>{
    res.json({
        success:true,
        message:"lol no one is special here everyone is treated equally "
    })
})

//using params , dynamic route should be kept at last or atleast lower than static routes 
router.get("/name/:uName",async (req,res)=>{
       const user = await User.find({name : req.params.uName});
       res.status(201).json({
            success:true,
            userInfo:user
       })
})


export default router ;