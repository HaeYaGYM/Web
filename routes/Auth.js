const express = require("express")
const router = express.Router()
const fs = require("fs")

var auth = {
    email : '111@111',
    password : '1111',
    nick : '1'
}

router.get("/sign_in", (req,res)=>{
    res.render('sign_in')})

router.post('/sign_in_process', (req,res) =>{
    var email = req.body.email
    var password = req.body.password
    console.log(req.session)
    console.log(req.body.email)       
    if (email === auth.email && password === auth.password){
                req.session.isOwner = true
                req.session.nickname = auth.nick
                console.log('Welcome')
                res.redirect('/')
            } else (
                res.send('Who')
            )
        })

router.get("/sign_up", (req,res)=>
        res.render('sign_up'))


router.post('/sign_up_process', (req,res) =>{
        var email = req.body.email
        var pw = req.body.pw
        var pw2 = req.body.pw2
        var name = req.body.name
        var nick = req.body.nick
        var weight = req.body.weight
        var height = req.body.height
        var birth = req.body.birth
        if(pw !== pw2){
            res.write("<script>alert('비밀번호가 같지 않습니다')</script>")
            res.write("<script>window.location=\"../views/sign_up\"</script>")
        }
    })

router.get('/logout', (req,res)=>{
    req.session.destroy(function(error){
res.redirect('/')
    }
)})    
        
module.exports = router