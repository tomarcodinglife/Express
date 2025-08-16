import express, { request, response } from 'express'
import path, { resolve } from 'path'

let app = express()
let PORT = 3436



app.get("/", (request, response) => {
    const absolutePath = path.resolve('views/home.html')
    console.log(absolutePath)
    response.sendFile(absolutePath)
})

app.get('/login', (request, response) => {
    const abPath = path.resolve('views/login.html')
    response.sendFile(abPath)
})

app.get('/about', (request, response) => {
    const absolutePath = path.resolve('views/about.html')
    response.sendFile(absolutePath)
})

app.get('/contact', (request, response) => {
    const absolutePath = path.resolve('views/contact.html')
    response.sendFile(absolutePath)
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})