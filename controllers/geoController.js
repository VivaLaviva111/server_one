const asyncHandler = require("express-async-handler")
const Geo = require("../models/geoModel")
const postGeo  = asyncHandler(async(req,res)=>{
   console.log(req.body);
    const suggestion = await Geo.create(req.body)
    if(suggestion){
      console.log("succes!");
       res.status(201).json(suggestion)
    } else{
       throw new Error("Failed to create Suggestion try again later")
    }
   })
   module.exports ={postGeo}