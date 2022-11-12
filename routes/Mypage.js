const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if(req.session.isOwner == true){
      res.render('mypage',{
          isOwner : req.session.isOwner,
          email : req.session.email,
          nick : req.session.nick,
          name : req.session.name,
          birth : req.session.birth,
          height : req.session.height,
          weight : req.session.weight
      })
  }else{
      res.render('mypage',{
          isOwner : false
      })
  }})
  
 module.exports = router