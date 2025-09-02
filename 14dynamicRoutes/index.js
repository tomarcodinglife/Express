import express from 'express'

const app = express()
const PORT = 3930

app.get('/', (request, response) => {

    const users = ['Sujit', 'Amit', 'Aman', 'Sohail']
    let data = `<ul>`

    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        data+=`<li> <a href=user/${element}> ${element} </a> </li>`
        console.log(element)  
    }
    data+=`</ul>`
    response.send(`This is Home Page <br> ${data}`)
})

app.get('/user/:name', (request, response) => {
    let user = request.params.name
    response.send(`This is User Profile of ${user}`)
})


app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})