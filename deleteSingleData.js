const { client } = require('./dbConfig');

const deleteSingleData = async () => {
    try {
        const database = client.db("team");
        const users = database.collection("design_team");

        const query = { roles:"Intern Grafic Designer"};

        const result = await users.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
        
    } catch (error) {
        console.log(error)
    }
    finally{
        await client.close();
    }
}
deleteSingleData();