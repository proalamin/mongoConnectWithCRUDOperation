const {client}=require('./dbConfig');

const insertSingleData=async()=>{
    try{
        const database = client.db("team");
        const users = database.collection("dev_team");

        const doc = {
            name:'Md Al Amin',
            roles:'Full Stack Developer',
            mobile:'01644502992'
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