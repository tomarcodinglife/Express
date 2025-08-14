
const express = require('express')
let app = express()
let PORT = 3535

app.get('/', (req, res) => {
    res.send("<h1>Test Page</h1>")
})

app.listen(PORT, ()=> {
    return(`Server is running at ${PORT}`)
})

