import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const port = 3631;

const dbName = 'mydb';
const mongodbURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbURL);

app.set('view engine', 'ejs');
app.use(express.json());

client.connect().then((connsection)=>{
    const db = connsection.db(dbName)

    app.get('/', (request, response)=>{
        const collection = db.collection('users')
        const users = collection.find().toArray();
        response.render('home', {users})
    })

    app.get('/api', (request, response)=>{
        const collection = db.collection('users')
        const users = collection.find().toArray();
        response.send(users)
    })

})
