const asyncHandler = require("express-async-handler")
const Geo = require("../models/geoModel")
const postGeo  = asyncHandler(async(req,res)=>{
 
   console.log(JSON.stringify(req.body));
   const objGeo = {geoData:{data:req.body}}
    const suggestion = await Geo.create(objGeo)
    if(suggestion){
      console.log("succes!");
       res.status(201).json(suggestion)
    } else{
       throw new Error("Failed try again later")
    }
   })
   module.exports ={postGeo}