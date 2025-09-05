import express from 'express'
import {MongoClient} from 'mongodb'

const app = express()
const PORT = 3330

// Database Connection
const dbName = "mydb"
const mongodbURL = "mongodb://localhost:27017"
const client = new MongoClient(mongodbURL)
let databaseUsers = null

async function dbconnection () {
    await client.connect()
    console.log("✅ Connected to MongoDB")
    return client.db(dbName)
}

dbconnection()


app.set('view engine', 'ejs')
app.get('/', async (request, response) => {
    const db = await dbconnection()
    const users = await db.collection('users').find().toArray()
    response.render('home', {users})
})

app.get('/api', async (request, response)=>{
    const db = await dbconnection()
    const users = await db.collection('users').find().toArray()
    // response.json(users)
    response.send(users)
})

app.listen(PORT, (request, response)=>{
    console.log(`Server Running on ${PORT}`)
})