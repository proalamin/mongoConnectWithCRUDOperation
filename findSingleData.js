const { client } = require('./dbConfig');

const findSingleData = async () => {
    try {
        const database = client.db("team");
        const users = database.collection("design_team");

        const query = { roles: "UI/UX Designer" };

        const user = await users.findOne(query);
        console.log(user);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();

    }
}
findSingleData();