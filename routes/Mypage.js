const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if(req.session.isOwner == true){
      res.render('mypage',{
          isOwner : req.session.isOwner,
          email : req.session.email
      })
  }else{
      res.render('mypage',{
          isOwner : false
      })
  }})
  
 module.exports = router