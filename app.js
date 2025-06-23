const express = require("express")
const app = express()

const path = require("node:path");
app.use(express.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
    {
        text: "gogogaga",
        user: "hazem",
        added: new Date()
    },
    {
        text: "GET OUT!",
        user: "zezokamd",
        added: new Date()
    }
  ];
  

app.get("/", (req, res) => {
    res.render("index", {messages:messages})
})
app.get("/new", (req, res) => {
    res.render("form")
})

app.post("/new", (req, res) => {
    messages.push({text:req.body.message, user: req.body.name, added: new Date()});
    res.redirect("/")
})

let PORT = 3000
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})
