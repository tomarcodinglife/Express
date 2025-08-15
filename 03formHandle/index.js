
const { log } = require('console')
const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = 3535

let app = express()

app.use(express.static(path.join(__dirname, "public")))

console.log("__dirname", __dirname)
console.log("path.join", path.join(__dirname, "public"))
console.log("express.static", express.static(path.join(__dirname, "public")));
console.log("app.use",app.use(express.static(path.join(__dirname, "public"))));



// function
function renderPage (pageName){
    const header = fs.readFileSync(path.join(__dirname, "pages/partials/header.html"), 'utf-8')
    const footer = fs.readFileSync(path.join(__dirname, "pages/partials/footer.html"), 'utf-8')
    const content = fs.readFileSync(path.join(__dirname, `pages/${pageName}.html`), 'utf-8')
    return header + content + footer
}


// Routes
app.get("/", (req, res) => res.send(renderPage("home")))
app.get("/about", (req, res) => res.send(renderPage("about")))
app.get("/contact", (req, res) => res.send(renderPage("contact")))



app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
    return(`Server is running at ${PORT}`)
})

