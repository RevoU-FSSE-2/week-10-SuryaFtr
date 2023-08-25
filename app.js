const express = require('express')
const databaseMiddleware = require('./middleware/databaseMiddleware.js')
const authRouter = require('./routes/auth-route.js')
const transferRouter = require('./routes/transfer-route.js')

const app = express();

app.use(express.json())

app.use(databaseMiddleware)

app.get('/', (req, res) => {
    res.send('Transfer Request Managament API')
})

app.use('/v1/auth/', authRouter)
app.use('/v1/transfer/', transferRouter)

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})