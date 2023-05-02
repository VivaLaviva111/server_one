const asyncHandler = require("express-async-handler");
const Conatact = require("../models/contactModel");
const postContact  = asyncHandler(async(req,res)=>{
   console.log(req.body);
   res.status(200).send("good job!")
   //  const Contacts = await Conatact.create(req.body)
   //  if(Contacts){
   //    console.log("succes!");
   //     res.status(201).json(Contacts)
   //  } else{
   //     throw new Error("Failed to create Suggestion try again later")
   //  }
   })
   module.exports ={postContact}