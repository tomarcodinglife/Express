import express from 'express'
import path from 'path'

let app = express()
let PORT = 4843

const absolutePathView = path.resolve('views')
const absoulutePathPublic = path.resolve('public')

app.use(express.static(absoulutePathPublic))

app.get('/', (request, response) => {
    response.sendFile(absolutePathView + "/home.html")
})
app.get('/about', (request, response) => {
    response.sendFile(absolutePathView + '/about.html')
})
app.get('/contact', (request, response) => {
    response.sendFile(absolutePathView + '/contact.html')
})
app.get('/login', (request, response) => {
    response.sendFile(absolutePathView+'/login.html')
})
app.post('/submit', (request, response) => {
    response.sendFile(absolutePathView+'/submitPage.html')
})

app.use((request, response) => {
    response.status(404).sendFile(absolutePathView + '/page404.html')
})

app.listen(PORT, () => {
    console.log(`Server Running on PORT No. : ${PORT}`)
})