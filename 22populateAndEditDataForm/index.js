import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const port = 3636;

const dbName = 'mydb';
const mongodbURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbURL);

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

client.connect().then((connsection)=>{
    const db = connsection.db(dbName)

    app.get('/', async (request, response)=>{
        const collection = db.collection('users')
        const users = await collection.find().toArray();
        response.render('home', {users})
    })

    app.get('/add-data', (request, response)=>{
        response.render('add-data')
    })

    app.post('/submit-data', async (request, response)=>{

        if(!request.body.name || !request.body.email || !request.body.age || !request.body.city){
            response.status(400).send({message:'Incomplete details'})
            return;
        }else{
            const collection = db.collection('users')
            const result = await collection.insertOne(request.body)
            console.log(result);
            response.send('Data Saved')
        }
        console.log(request.body);
    })

    app.post('/edit-data/:id', async (request, response)=>{
        const id = request.params.id;
        const collection = db.collection('users')
        const result = await collection.updateOne(
            {_id: new ObjectId(id)},
            {$set: request.body}
        )
        if(result){
            response.send({message: 'User Updated', sucess: true})
        }else{
            response.status(400).send({message: 'User Not Found', sucess: false})
        }
        console.log(id);
    })

    app.delete('/delete-user/:id', async (request, response)=>{
        try {
            const id = request.params.id;
            const collection = db.collection('users')
            const result = await collection.deleteOne({_id: new ObjectId(request.params.id)})
            
            if(result){
                response.send({message: 'User Deleted', sucess: true})
            }else{
                response.status(400).send({message: 'User Not Found', sucess: false})
            }
        console.log(id);
        } catch (error) {
            console.error(error);
            response.status(500).send({ message: 'Internal Server Error', success: false });
        }
    })
    

    app.listen(port, ()=>{
        console.log(`Server started at http://localhost:${port}`);
    })

})