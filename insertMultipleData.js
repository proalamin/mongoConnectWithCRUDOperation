const { client } = require('./dbConfig');

const insertMultipleData = async () => {
    try {
        const database = client.db("team");
        const users = database.collection("design_team");

        const docs = [
            { name: 'Md Al Amin', roles: 'UI/UX Designer', mobile:'01644502992'},
            { name: 'Hadi', roles: 'Animation Designer', mobile:'01645834784'},
            { name: 'Munim', roles: 'Product Designer', mobile:'01644502332'},
        ];

        const options = { ordered: true };
        const result = await users.insertMany(docs, options);
        console.log(`${result.insertedCount} documents were inserted`);

    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}
insertMultipleData();