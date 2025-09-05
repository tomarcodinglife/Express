import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const PORT = 3836

// Database Connection
const dbName = 'mydb'
const mongodbURL = 'mongodb://localhost:27017'
const client = new MongoClient(mongodbURL)


app.set('view engine', 'ejs')
app.get('/', (request, response)=>{
    response.render('home')
})