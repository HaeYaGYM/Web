const express = require("express");
const router = express.Router();
router.get("/", (req,res)=>{
        if(req.session.isOwner == true){
        res.render('board_list',{
            isOwner : true,
            email : req.session.email
        })
    }else{
        res.render('board_list',{
            isOwner : false
        })
    }})
module.exports = router