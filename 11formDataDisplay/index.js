import express, { request, response } from 'express'

const app = express()
const PORT = 5952

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', (request, response) => {
    response.render('home', {
        title : 'Home Page',
        heading : 'Welcome to Home Page'
    })
})

app.get('/addUser', (request, response) => {
    response.render('addUser')
})

app.post('/submitUsers', (request, response) => {
    response.render('submitUsers', request.body)
})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})