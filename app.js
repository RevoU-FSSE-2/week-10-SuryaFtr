const express = require('express');
const { MongoClient } = require('mongodb')

const app = express();

app.use(express.json())

let db
(async () => {
    try {
        const client = await new MongoClient('mongodb://127.0.0.1:27017').connect()
        db = client.db('revouweek10')
    } catch (error) {
        console.log(error, `<=================== error ==================`);
    }
})()

app.post('/v1/users', async (req, res) => {
    console.log(req.body, `<=================== body ==================`);

    const { username, email } = req.body

    const user = await db.collection('users').insertOne({ username, email })

    res.status(200).json({
        message: 'success',
        data: user
    })
})

app.get('/v1/users', async (req, res) => {
    const users = await db.collection('users').find().toArray()

    res.status(200).json({
        message: 'success',
        data: users
    })

})

app.get('/', (req, res) => {
    res.send('My App')
})

const port = 3000;

app.listen(port, () => {
    console.log(`Running on port http://localhost:${port}`)
})