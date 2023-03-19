const express = require('express')
const mongoose = require('mongoose')
const app = express();

const uri = "mongodb+srv://mnoel1988:M%40rLey%26M%40%24E14@noelagency2023.ocmixfx.mongodb.net/?retryWrites=true&w=majority"


const { MongoClient } = require('mongodb');

async function connect() {
    // we'll add code here soon
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }) ;     
try {
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
    // Connect to the MongoDB cluster
    // await client.connect();

    // // Make the appropriate DB calls
    // await  listDatabases(client);

} catch (error) {
    console.error(error);
} 
// finally {
//     await client.close();
 }

connect();
// main().catch(console.error);
//  }
 /**
* Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
* See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
*/
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

app.listen(8000,() => {console.log('server started on port 8000')});