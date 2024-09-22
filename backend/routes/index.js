const express = require('express');
const userRouter = require("./user")
const accountRouter = require("./account");

const router = express.Router();



//  router.get("/",(req,res)=>{
//     console.log("mainRoute");
//     return res.status(200).json({
//         message: "mainRoute"
//     });
    
//  })
 router.use("/user",userRouter)
 router.use("/account", accountRouter);

module.exports = router;