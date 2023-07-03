import express from "express";

import {registerUser,reqparams,reqquery,specialStatic } from "../controllers/users.js";


const router = express.Router();


router.post("/new",registerUser);

// using queries 
router.get("/all",reqquery);

router.get("/name/special",specialStatic);

//using params , dynamic route should be kept at last or atleast lower than static routes 
router.get("/name/:uName",reqparams)


export default router ;