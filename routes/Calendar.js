const express = require("express");
const router = express.Router();
const fs = require("fs")
router.get("/", (req,res)=>{
        res.render('calendar',{
            isOwner : req.session.isOwner,
            email : req.session.email
        })})
module.exports = router