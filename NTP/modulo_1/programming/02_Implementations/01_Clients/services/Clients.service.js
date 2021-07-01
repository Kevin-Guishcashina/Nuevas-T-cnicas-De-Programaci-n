
const { MongoConnection } = require('../lib/Mongo');

//collection
const COLLECTION = "clients"
const findUsers = () => new Promise (async (resolve, reject) => {
    try {
      //inicializa mongoclient para que retorne la configuracion de la db
        const db = await MongoConnection();
      //obtenemos la collection
        const clients = DB.collection(COLLECTION); 
        const clientsList = await clients.find({}).toArray();
        resolve(clientsList);
    } catch (error) {
        reject(error)
    }
    
})

module.exports = {
    findUsers,
}