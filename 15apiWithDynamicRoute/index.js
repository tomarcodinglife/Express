import express from 'express'
import userData from './users.json' with {type:'json'}

const app = express()
const PORT = 3531

app.get('/', (request, response) => {
    response.send(userData)
})

app.get('/user/:id', (request, response) => {
    const id = request.params.id
    let filterData = userData.filter((user)=>user.id==id)
    response.send(filterData)
})

app.get('/username/:name', (request, response) => {
    const name = request.params.name
    let filterData = userData.filter((user) => user.name.toLowerCase() == name.toLowerCase())
    response.send(filterData)
})


app.listen(PORT, (request, response) => {
    console.log(`Server running on ${PORT}`)
})

