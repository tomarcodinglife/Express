import express from 'express'

const app = express()
const PORT = 3532

function checkAgeMiddleware (request, response, next) {
    if(!request.query.age || request.query.age < 18){
        response.send("You are not eligible for suffer this website")
    }else{
        next()
    }
}

function userSufferURLMiddleware (request, response, next) {
    console.log(`users suffering current ${request.url}`)
    next()
}

// app.use(checkAgeMiddleware)

// 02 Middleware
app.get('/', userSufferURLMiddleware, (request, response) => {
    response.send(`<h1>Home Page</h1>
    <br> <a href=/>Home</a>
    <br> <a href=/about>About</a>
    <br> <a href=/contact>Contact</a>
    <br> <a href=/login>Login</a>
    `)
})
app.get('/about',  (request, response) => {
    response.send(`<h1>about Page</h1>
    <br> <a href=/>Home</a>
    <br> <a href=/about>About</a>
    <br> <a href=/contact>Contact</a>
    <br> <a href=/login>Login</a>
        `)
})
app.get('/contact', userSufferURLMiddleware, (request, response) => {
    response.send(`<h1>contact Page</h1>
    <br> <a href=/>Home</a>
    <br> <a href=/about>About</a>
    <br> <a href=/contact>Contact</a>
    <br> <a href=/login>Login</a>
    `)
})
app.get('/login', userSufferURLMiddleware, checkAgeMiddleware, (request, response) => {
    response.send(`<h1>login Page</h1>
    <br> <a href=/>Home</a>
    <br> <a href=/about>About</a>
    <br> <a href=/contact>Contact</a>
    <br> <a href=/login>Login</a>
    `)
})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
