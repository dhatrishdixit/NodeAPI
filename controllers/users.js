import { User } from "../models/users.js";


export const registerUser = async (req,res)=>{

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
   
}


export const reqquery = async (req,res)=>{
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

}


export const specialStatic = (req,res)=>{
    res.json({
        success:true,
        message:"lol no one is special here everyone is treated equally "
    })
}

export const reqparams = async (req,res)=>{
    const user = await User.find({name : req.params.uName});
    res.status(201).json({
         success:true,
         userInfo:user
    })
}