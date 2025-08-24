import express from 'express'

const app = express()
const PORT = 5952


app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})