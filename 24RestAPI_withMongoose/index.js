import mongoose from "mongoose";
import userModel from "./model/userModel.js";

import express from "express";

const app = express();
const PORT = 3000;

// mondoDB connection
await mongoose.connect("mongodb://localhost:27017/mydb").then(()=>{
    console.log("Database connected");
})


app.get('/', async (request, response) =>{
    const userModelData = await userModel.find();
    response.send({userModelData})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})