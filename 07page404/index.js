import express from 'express'
import path from 'path'
let app = express()
let PORT = 3519

app.get('/', (request, response) => {
    const abspath = path.resolve('views/home.html')
    response.sendFile(abspath)
})

app.get('/about', (request, response) => {
    const abspath = path.resolve('views/about.html')
    response.sendFile(abspath)
})

app.get('/contact', (request, response) => {
    const abspath = path.resolve('views/contact.html')
    response.sendFile(abspath)
})

app.get('/login', (request, response) => {
    const abspath = path.resolve('views/login.html')
    response.sendFile(abspath)
})

app.use((request, response)=> {
    const abspath = path.resolve('views/page404.html')
    // response.status(404).send("Page Not Available")
    response.status(404).sendFile(abspath)
})

app.listen(PORT)