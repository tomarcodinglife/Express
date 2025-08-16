import express from 'express'
import form from './form.js'
const app = express()
const PORT = 5950



app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get('/login', (req, res) => {
    res.send (form())
})

app.post('/submit', (req, res) => {
    res.send(`<h1>Login Sucessful</h1>`)
})



app.listen(PORT, ()=>{
    console.log(`Server run at ${PORT}`)
})