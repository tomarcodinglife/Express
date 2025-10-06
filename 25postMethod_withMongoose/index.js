import express from "express";
import mongoose from "mongoose";
import userModel from "./model/userModel.js";

const app = express();
const PORT = 5621;


app.use(express.json())
app.use(express.urlencoded({extended:true}))

// mongoDB connection
mongoose.connect("mongodb://localhost:27017/mydb").then(()=>{
    console.log("Database connected");
})

app.get ("/", (request, response) => {
    response.send ("Welcome to Home Page")
})


app.post('/api', async (request, response)=>{
    
    const {name, age, email, city} = request.body;
        if(!name || !age || !email || !city) {
            response.send({
            message : "Data Not Stored",
            success : false,
            storeInfo : null
        })
        // return false
        }else{
            const userData = await userModel.create(request.body)
            response.send({
            message : "Data Stored",
            success : true,
            storeInfo : userData
            })
        }
})

app.listen(PORT, (request, response)=>{
    console.log(`Server Running on ${PORT}`)
})
// Try this API in Postman or Thunder Client cvccv
// Try this API in Postman or Thunder Client cvccv