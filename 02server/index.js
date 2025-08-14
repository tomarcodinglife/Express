
const express = require('express');
const { default: home, service, course, contact, login, about } = require('./pages.js');
const app = express();


app.get("/", (request, response) => {
    response.send(home())
})
app.get("/service", (request, response) => {
    response.send(service())
})
app.get("/course", (request, response) => {
    response.send(course())
})
app.get("/contact", (request, response) => {
    response.send(contact())
})
app.get("/login", (request, response) => {
    response.send(login())
})

app.get("/about", (request, response) => {
    response.send(about())
} )

const PORT = 3939
app.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`)
})
