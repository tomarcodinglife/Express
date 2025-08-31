import express, { response } from 'express'

const app = express()
const PORT = 3631


app.get('/', (request, response)=> {
    response.render('home')
})

app.get('/addUser', (request, response)=> {
    response.render('addUser')
})
app.get('/submitUsers', (request, response)=> {
    response.render('submitUsers')
})


app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})