//CONEXION A MONGODB
const { MongoClient } = require('mongodb');

const DB_NAME = "clients";
//const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wjh0q.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@proyecto.wjh0q.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
console.log(URL);
var MongoConnection = () => new Promise(async (resolve, reject) => {
    try {
        let client = new MongoClient(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        await client.connect();
        resolve(client.db(DB_NAME));
    } catch (error) {
        reject(error)
    }
})

module.exports.MongoConnection = MongoConnection;