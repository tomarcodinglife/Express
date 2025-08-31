import express, { response } from 'express'

const app = express()
const PORT = 3631

app.set('view engine', 'ejs')
app.use(express.urlencoded ({extended:false}))

app.get('/', (request, response)=> {
    response.render('home')
})

app.get('/addUser', (request, response)=> {
    response.render('addUser')
})
app.post('/submitUsers', (request, response)=> {
    // console.log(request.body)
    response.render('submitUsers', request.body)
})

app.get('/users', (request, response) => {
    const users = ['sujit', 'amit', 'rahul', 'shivam']
    response.render('users', {users:users})
})


app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}