const express = require("express");
const router = express.Router();
router.get("/list", async(req,res)=>{
    if(req.session.isOwner == true){
        res.render('board_list',{
            isOwner : req.session.isOwner,
            nick : req.session.nick
        })
    }else{
        res.render('board_list',{
            isOwner : false
        })
    }})

router.get("/write", async(req,res)=>{
    res.render('board_write',{
        nick : req.session.nick
    })
})
module.exports = router