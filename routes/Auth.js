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

/*router.post('/sign_in', (req,res) =>{
            var email = req.body.email
            var pw = req.body.pw
            
        })*/

router.get("/sign_up", (req,res)=>
        fs.readFile(`views/sign_up.html`, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send("<h1>500 Error</h1>")
            }
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data);
        }))

/*router.post('/sign_up', (req,res) =>{
        var email = req.body.email
        var pw = req.body.pw
        var pw2 = req.body.pw2
        var name = req.body.name
        var nick = req.body.nick
        var weight = req.body.weight
        var height = req.body.height
        var birth = req.body.birth
    })*/
        
module.exports = router