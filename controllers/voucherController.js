const asyncHandler = require("express-async-handler")
const Voucher = require("../models/voucherModel")
const postVoucher  = asyncHandler(async(req,res)=>{
   if(req.headers.auth != "1234"){
      res.status(401).json({"status":"no auth"})
      return
   }
    const objVoucher = await Voucher.create(req.body)
    if(objVoucher){
      console.log("added voucher!");
       res.status(201).json(objVoucher)
    } else{
       throw new Error("Failed try again later")
    }
   })

const checkVoucher = asyncHandler(async(req,res)=>{
const user = await Voucher.findOne(req.body)
if (user) {
   console.log(`voucher ${req.body.voucher} in`);
 res.status(200).json({"valid":true,user})  
}
else{
   res.status(404).json({"status":"Not found"}) 
}
})

   module.exports ={postVoucher,checkVoucher}