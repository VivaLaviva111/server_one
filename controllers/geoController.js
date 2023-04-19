const asyncHandler = require("express-async-handler")
const Geo = require("../models/geoModel")
const postGeo  = asyncHandler(async(req,res)=>{
   let s = JSON.stringify(req.body)
   console.log(s);
    const suggestion = await Geo.create(req.body)
    if(suggestion){
      console.log("succes!");
      console.log(suggestion);
       res.status(201).json(suggestion)
    } else{
       throw new Error("Failed to create Suggestion try again later")
    }
   })
   module.exports ={postGeo}