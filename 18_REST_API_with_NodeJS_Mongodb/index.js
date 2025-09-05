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

    const db = client.db(dbName)
    const collection = db.collection('users')
    databaseUsers = await collection.find().toArray()
    console.log(databaseUsers)
}

dbconnection()



app.get('/', (request, response) => {
    response.render('home')
})

app.listen(PORT, (request, response)=>{
    console.log(`Server Running on ${PORT}`)
})