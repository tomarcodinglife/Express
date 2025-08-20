import express from 'express'
import morgan from 'morgan'

const app = express()
const PORT = 3534

app.use(morgan('dev'))

// 04 Middleware  (with Morgan)
app.get('/', (request, response) => {
    response.send(`
        <h1>Home Page</h1>
        <br> <a href=/>Home</a>
        <br> <a href=/about>About</a>
        <br> <a href=/contact>Contact</a>
        <br> <a href=/login>Login</a>
    `)
})
app.get('/about', (request, response) => {
    response.send(`
        <h1>about Page</h1>
        <br> <a href=/>Home</a>
        <br> <a href=/about>About</a>
        <br> <a href=/contact>Contact</a>
        <br> <a href=/login>Login</a>
    `)
})
app.get('/contact', (request, response) => {
    response.send(`
        <h1>contact Page</h1>
        <br> <a href=/>Home</a>
        <br> <a href=/about>About</a>
        <br> <a href=/contact>Contact</a>
        <br> <a href=/login>Login</a>
    `)
})
app.get('/login', (request, response) => {
    response.send(`
        <h1>login Page</h1>
        <br> <a href=/>Home</a>
        <br> <a href=/about>About</a>
        <br> <a href=/contact>Contact</a>
        <br> <a href=/login>Login</a>
    `)
})

app.get('/wait', (request, response) => {
    setTimeout(()=>{
        response.send('result after 1 minut')
    }, 1000)
})


app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
