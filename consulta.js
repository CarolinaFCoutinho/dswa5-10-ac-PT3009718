console.log('Aluno: Carolina de Faria Coutinho');

const {MongoClient} = require('mongodb');

async function main(){

    const uri = "mongodb+srv://Carolina:coutinho@cluster0.msaww.mongodb.net/ifsp?retryWrites=true&w=majority";
 
    const client = new MongoClient(uri);
 
    try {
        await client.connect();
        console.log('Servidor Conectado!')
        const database = client.db("ifsp");

        const contatos = database.collection("contatos");

        const findResult = await contatos.find({}).toArray();
        console.log('Foram encontrados os seguintes docs:');
        console.log(findResult);


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);