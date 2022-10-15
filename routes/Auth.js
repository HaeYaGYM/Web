const express = require("express");
const router = express.Router();
const fs = require("fs")

    router.get("/", (req,res)=>
        fs.readFile(`views/auth.html`, (error, data) => {
            if (error) {
                console.log(error);
                return res.status(500).send("<h1>500 Error</h1>");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }))

module.exports = router