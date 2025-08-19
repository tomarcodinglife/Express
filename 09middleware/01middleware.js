import express from 'express'

const app = express()
const PORT = 3531

function checkRouter(request, response, next) {
    console.log(`User try to acess ${request.url} route`)
    next()
}

app.use(checkRouter)

// 01 Middleware
app.get('/', (request, response) => {
    response.send(`<h1>Home Page</h1>
    <br> <a href=/>Home</a>
    <br> <a href=/about>About</a>
    <br> <a href=/contact>Contact</a>
    <br> <a href=/login>Login</a>
    `)
})
app.get('/about', (request, response) => {
    response.send(`<h1>about Page</h1>
    <br> <a href=/>Home</a>
    <br> <a href=/about>About</a>
    <br> <a href=/contact>Contact</a>
    <br> <a href=/login>Login</a>
        `)
})
app.get('/contact', (request, response) => {
    response.send(`<h1>contact Page</h1>
    <br> <a href=/>Home</a>
    <br> <a href=/about>About</a>
    <br> <a href=/contact>Contact</a>
    <br> <a href=/login>Login</a>
    `)
})
app.get('/login', (request, response) => {
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
