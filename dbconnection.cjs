const  {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callback) {
    dbConnection = MongoClient.connect('mongodb+srv://deepakit21:deepak1515@deepak.unjcdn9.mongodb.net/?retryWrites=true&w=majority').then
    (function(client) { 
       dbConnection = client.db("expensetracker")
       callback()
    }).catch(function(error){
          callback(error)
    })
}


function getDb() {
    return dbConnection
}

// Exporting the required functions
module.exports = {connectToDb, getDb}