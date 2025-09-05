import express, { response } from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const PORT = 3836

// Database variable
const dbName = 'mydb'
const mongodbURL = 'mongodb://localhost:27017'
const client = new MongoClient(mongodbURL)

app.set('view engine', 'ejs')
client.connect().then((connection)=>{
    const db = connection.db(dbName)

    app.get('/', async (request, response)=>{
    const collection = db.collection('users')
    const users = await db.collection('users').find().toArray()
    response.render('home', {users})
    })

    app.get('/api', async (request, response)=>{
    const collection = db.collection('users')
    const users = await db.collection('users').find().toArray()
    response.send(users)
    })

    app.get('/form', (request, response) => {
    response.render('form')
    })

})

app.listen(PORT, (request, response) => {
    console.log(`Server Running on ${PORT}`)
})