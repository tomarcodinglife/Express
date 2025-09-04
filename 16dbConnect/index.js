import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const PORT = 3948

const dbName = "mydb"
const mongoDBurl = "mongodb://localhost:27017"
const client = new MongoClient(mongoDBurl)

async function dbConnection(){
    await client.connect()
    console.log("✅ Connected to MongoDB")

    const db = client.db(dbName)
    const collection = db.collection('users');

    const result = await collection.find().toArray()
    console.log(result)
}

dbConnection()

app.get('/', (request, response) => {
    response.send('Home Page')
})


app.listen(PORT, (request, response) => {
    console.log(`Server Running on ${PORT}`);
})