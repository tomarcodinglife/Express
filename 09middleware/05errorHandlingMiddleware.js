import express from 'express'

const app = express()
const PORT = 3535

// 05 Middleware
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

app.get('/error', (request, response, next) => {
    const error = new Error('Something Went Wrong!')
    error.status = 404
    response.sendaa('Error Page')
    next(error)

})

function errorHandel (error, request, response, next) {
    response.status(error.status || 500).send('⚠️ try after sometime ....')
}

app.use(errorHandel)

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
