const express = require("express"),
  fs = require("fs"),
  session = require('express-session'),
  filestore = require('session-file-store')(session)



//const database = require("./config/database") 
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('views'))

app.use(session({
  secret:'hyg',
  resave: false,
  saveUninitialized: true,
  store:new filestore()
}))

const authrouter = require("./routes/Auth"),
  boardrouter = require("./routes/Board"),
  calendarrouter = require("./routes/Calendar")

app.use("/auth", authrouter)
app.use("/board", boardrouter)
app.use("/calendar", calendarrouter)

app.get("/", (req, res) => {
  if(req.session.isOwner == true){
    res.render('index',{
        isOwner : req.session.isOwner,
        nick : req.session.nick
    })
}else{
    res.render('index',{
        isOwner : false
    })
}})



const port = 8000
app.listen(port, () => {
  console.log(`SERVER ON! PORT : ${port}`)
})