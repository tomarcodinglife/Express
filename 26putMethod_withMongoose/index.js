import { response } from "express";
import express from express

const app = express();
const port = 3526;

app.get("/", (request, response)=>{
    response.send("Hello My Dear Friend")
})

//temp line
