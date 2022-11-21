const {client}=require('./dbConfig');

const insertSingleData=async()=>{
    try {
        const database = client.db("team");
        const users = database.collection("design_team");

        const doc = {
            name:'Mr X',
            roles:'Intern Grafic Designer',
            mobile:'01644502993'
        }
        const result = await users.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();

    }
}

insertSingleData();