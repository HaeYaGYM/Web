const express = require("express")
const router = express.Router()
const fs = require("fs")


    
router.get("/sign_in", (req,res)=>
        fs.readFile(`views/sign_in.html`, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send("<h1>500 Error</h1>")
            }
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data);
        }))

router.post('/sign_in', (req,res) =>{
            var email = req.email
            var pw = req.pw
            
        })

router.get("/sign_up", (req,res)=>
        fs.readFile(`views/sign_up.html`, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send("<h1>500 Error</h1>")
            }
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data);
        }))

router.post('/sign_up', (req,res) =>{
        var email = req.email
        var pw = req.pw
        var pw2 = req.pw2
        var name = req.name
        var nick = req.nick
        var weight = req.weight
        var height = req.height
        var birth = req.birth
    })
        
module.exports = router