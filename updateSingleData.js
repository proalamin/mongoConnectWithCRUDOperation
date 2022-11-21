const { client } = require('./dbConfig');

const updateSingleData = async () => {
    try {
        const database = client.db("team");
        const users = database.collection("design_team");

        const filter = { mobile: "01644502002" };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                mobile: "01644502012"
            },
        };
        const result = await users.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

    } catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

updateSingleData();