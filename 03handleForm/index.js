import express from 'express'
const app = express()
const PORT = 5950

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get('/login', (req, res) => {
    res.send ()
})

app.get('/submit', (req, res) => {
    res.send('<h1>Login Sucessful</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Server run at ${PORT}`)
})