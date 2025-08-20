import express from 'express'

const app = express()
const PORT = process.env.PORT || 3533

app.use(express.urlencoded({extended:false})) // builtin middleware
app.use(express.static('public')) // builtin middleware - i am use for load css

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
    response.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>login</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <h1>login Page</h1>
                <br> <a href=/>Home</a>
                <br> <a href=/about>About</a>
                <br> <a href=/contact>Contact</a>
                <br> <a href=/login>Login</a>
            </header>
            <main>
                <form action="/submit" method="post">
                    <input type="text" placeholder="Enter Username" name='username'>
                    <br><br>
                    <input type="password" placeholder="Enter Password" name='password'>
                    <br><br>
                    <button>Submit</button>
                </form>
            </main>
        </body>
        </html>

    `)
})

app.post('/submit', (request, response) => {
    const {username, password} = request.body  // request body data acess
    response.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>login</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <main>
                <h1>Login Sucess</h1>
                <p>Username: ${username}</p>
                <p>Password: ${password}</p>
            </main>
        </body>
        </html>
    `)

})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
