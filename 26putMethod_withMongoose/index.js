import express from "express"

const app = express();
const port = 3526;

app.get("/", (request, response)=>{
    response.send("Hello My Dear Friend")
})

app.post("/", (request, response)=>{
    response.send({
        message : "data Stored",
        sucess : true
    })
})

app.listen(port, (request, response)=> {
    console.log(`Server Running on ${port}`)
})
