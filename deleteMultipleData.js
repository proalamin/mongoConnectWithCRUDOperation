const { client } = require('./dbConfig');

const deleteMultipleData=async()=>{
    try {
        const database = client.db("team");
        const users = database.collection("design_team");

        const query = {};

        const result = await users.deleteMany(query);
        console.log("Deleted " + result.deletedCount + " documents");
        
    } catch (error) {
        console.log(error);
    }
    finally{
        await client.close();
    }
}
deleteMultipleData();