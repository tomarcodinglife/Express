const {log} = require('console')
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3030

app.use(express.static(path.join(__dirname, "public")))

// function 
function renderPage (pageName) {
    const header = fs.readFileSync(path.join(__dirname, "pages/partials/header.html"), 'utf-8')
    const footer = fs.readFileSync(path.join(__dirname, "pages/partials/footer.html"), 'utf-8')
    const content = fs.readFileSync(path.join(__dirname, `pages/${pageName}.html`), 'utf-8')
    return header + content + footer
}

// Routes
app.get('/', (req, res) => res.send(renderPage("home")))
app.get('/about', (req, res) => res.send(renderPage("about")))
app.get('/contact', (req, res) => res.send(renderPage("contact")))

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})