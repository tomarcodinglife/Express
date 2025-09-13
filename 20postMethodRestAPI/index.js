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

    app.get('/', (request, response)=>{
        response.send('Welcome to my API')
    })

    app.get('/api', async (request, response)=>{
        const collection = db.collection('users')
        const users = await collection.find().toArray();
        response.send(users)
    })

    app.post('/addUsers', (request, response)=>{
        if(!request.body.name || !request.body.email || !request.body.city || !request.body.age){
            response.status(400).send({message: 'Incomplete details'})
            return;
        }else{
            const collection = db.collection('users');
            collection.insertOne(request.body);
            response.send({message: 'User added successfully'})
        }
        console.log(request.body);
    })


    app.listen(port, (request, response)=>{
        console.log(`Server running on ${port}`);
    });

});


