import express from 'express'

const app = express()
const PORT = 5951

// ejs
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.render('home', {name : 'Rohit Singh', channel : "rohitabc" }) // second parameter for data
})


app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
})