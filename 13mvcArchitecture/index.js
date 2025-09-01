import express from 'express'
import { handleUser } from './controller/userController.js'

const app = express()
const PORT = 3859

app.set('view engine', 'ejs')

app.get('/users', handleUser)



app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})