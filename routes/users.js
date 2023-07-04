import express from "express";

import {registerUser,reqparams,reqquery,specialStatic,updateUser,deleteUser } from "../controllers/users.js";


const router = express.Router();


router.post("/new",registerUser);

// using queries 
router.get("/all",reqquery);

router.get("/name/special",specialStatic);

//using params , dynamic route should be kept at last or atleast lower than static routes 

router.route("/name/:uName").get(reqparams).put(updateUser).delete(deleteUser);
// router.get("/name/:uName",reqparams);

// router.put("/name/:uName",updateUser);

// router.delete("/name/:uName",deleteUser);


export default router ;