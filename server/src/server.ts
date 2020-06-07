import express from 'express'

const app = express();
app.get('/users', (req,res) => {
    console.log("Get Users")
    res.send("users top")
})

app.listen(3333)