import express from 'express'

const app = express()
const PORT = process.env.PORT || 3533

app.use(express.urlencoded({extended:false})) // builtin middleware

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
    <form action="/submit" method="post">
        <input type="text" placeholder="Enter Username" name='username'>
        <br><br>
        <input type="password" placeholder="Enter Password" name='password'>
        <br><br>
        <button>Submit</button>
    </form>
    `)
})

app.post('/submit', (request, response) => {
    const {username, password} = request.body  // request body data acess
    response.send(`
        <h1>Login Sucess</h1>
        <p>Username: ${username}</p>
        <p>Password: ${password}</p>
        `)

})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
