import express from 'express'
import {MongoClient} from 'mongodb'

const app = express()
const PORT = 3830

const dbName = "mydb"
const mongoDBurl = "mongodb://localhost:27017"
const client = new MongoClient(mongoDBurl)

async function dataBaseConnection(){
    await client.connect()
    
    console.log("✅ Connected to MongoDB")

    const db = client.db(dbName)
    const collection = db.collection('users')
    const result = await collection.find().toArray()
    console.log(result)
}

dataBaseConnection()


app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.render('home')
})


app.listen(PORT, (request, response) => {
    console.log(`Server Running on ${PORT}`)
})