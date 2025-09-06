import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const PORT = 3836

// Database variable
const dbName = 'mydb'
const mongodbURL = 'mongodb://localhost:27017'
const client = new MongoClient(mongodbURL)

app.set('view engine', 'ejs')

// Middleware for form & JSON parsing
app.use(express.urlencoded ({extended:true}))
app.use(express.json())

client.connect().then((connection)=>{
    const db = connection.db(dbName)
    const collection = db.collection('users')

    app.get('/', async (request, response)=>{
    const users = await db.collection('users').find().toArray()
    response.render('home', {users})
    })

    app.get('/api', async (request, response)=>{
    const users = await db.collection('users').find().toArray()
    response.send(users)
    })

    app.get('/form', (request, response) => {
    response.render('form')
    })

    app.post('/add_student', async (request, response) => {
        // console.log(request.body);

        const result = await collection.insertOne(request.body)
        console.log(result)
        response.send('Data Saved')
    })

})

app.listen(PORT, (request, response) => {
    console.log(`Server Running on ${PORT}`)
})