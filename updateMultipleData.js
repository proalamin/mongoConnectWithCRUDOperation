const { client } = require('./dbConfig');

const updateSingleData=async()=>{
    try {
        const database = client.db("team");
        const users = database.collection("design_team");

        const filter = {};
        const updateDoc = {
            $set: {
               palaceOfWork:"remote"
            }
        };
        const result = await users.updateMany(filter, updateDoc);
        console.log(`Updated ${result.modifiedCount} documents`);
        
    } catch (error) {
        console.log(error);
    }
    finally{
        await client.close();
    }
}
updateSingleData();