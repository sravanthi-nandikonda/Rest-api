const router =require("express").Router();
const User = require("../models/User")

router.get("/",(req,res)=>{
    res.send("hey this is user")
})

module.exports = router;