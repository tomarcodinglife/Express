import express, { response } from 'express'

const app = express()
const PORT = 3631


app.get('/', (request, response)=> {
    response.render()
})



app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})