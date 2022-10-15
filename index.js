const express = require("express"),
  fs = require("fs"),
  authrouter = require("./routes/Auth"),
  boardrouter = require("./routes/Board"),
  calendarrouter = require("./routes/Calendar")

const app = express()

app.set('view engine', 'html')
app.use(express.static('public'))
app.use(express.static('views'))


app.use("/auth", authrouter)
app.use("/board", boardrouter)
app.use("/calendar", calendarrouter)

app.get("/", (req, res) => {
  fs.readFile(`./views/index.html`, (error, data) => {
      if (error) {
          console.log(error);
          return res.status(500).send("<h1>500 Error</h1>");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
  });
});



const port = 8000
app.listen(port, () => {
  console.log(`SERVER ON! PORT : ${port}`)
})