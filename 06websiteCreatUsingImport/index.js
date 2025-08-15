import express, { request, response } from 'express'

let app = express()
let PORT = 3436


app.get("/", (request, response) => {
    response.send("<h1>Server Running</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT} `)
})