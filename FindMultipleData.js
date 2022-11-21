const {client}=require('./dbConfig');

const FindMultipleData=async()=>{
    try{
        const database = client.db("team");
        const users = database.collection("design_team");

        const query={};

        const cursor = users.find(query);
        if ((await cursor.EstimatedDocumentCount) === 0) {
            console.log("No documents found!");
        }else{
            const users= await cursor.toArray();

            await users.forEach(user=>console.log(user));
        }

    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}
FindMultipleData();