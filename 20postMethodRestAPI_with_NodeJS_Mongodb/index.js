import express from 'express';
import { MongoClient} from 'mongodb';


const app = express();
const port = 3021;

const dbName = 'mydb';
const mongodbURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbURL);

app.use(express.json());

client.connect().then((connection)=>{ 
    const db = connection.db(dbName)

    app.get('/api', async (request, response)=>{
        const collection = db.collection('users')
        const users = await collection.find().toArray();
        response.send(users)
    })


    app.listen(port, (request, response)=>{
        console.log(`Server running on ${port}`);
    });

});


