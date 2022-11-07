const express = require("express");
const router = express.Router();
router.get("/", (req,res)=>{
        if(req.session.isOwner == true){
        res.render('board_list',{
            isOwner : req.session.isOwner,
            email : req.session.email
        })
    }else{
        res.render('board_list',{
            isOwner : false
        })
    }})
module.exports = router