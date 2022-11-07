const express = require("express");
const router = express.Router();
const fs = require("fs")
router.get("/list", (req,res)=>
        res.render('board_list'))
module.exports = router