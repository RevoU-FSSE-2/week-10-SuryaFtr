const { MongoClient, ObjectId } = require('mongodb')

const databaseMiddleware = async (req, res, next) => {
    try {
        const client = await new MongoClient('mongodb://mongo:Ko7S8NCW13W5gVsDKw2F@containers-us-west-110.railway.app:7655').connect()
        db = client.db('revouweek10')

        req.db = db

        next()
    } catch (error) {
        console.log(error, `<=================== error ==================`);
    }
}

module.exports = databaseMiddleware