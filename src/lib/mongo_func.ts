import { MongoClient, ObjectId, Db} from "mongodb";
import { config_var } from "../config";

const user = encodeURIComponent(config_var.dbuser);
const password = encodeURIComponent(config_var.dbpassword);
const dbname = encodeURIComponent(config_var.dbname);

const mongo_uri = `mongodb+srv://${user}:${password}@${config_var.dbhost}/${dbname}`;

let myMongoCli = new MongoClient(mongo_uri,{ useUnifiedTopology: true });
let connection:Db|null = null;

async function connectToMongoAtlas() {
    if (!connection) {
        console.log('connecting, wait a minute');
        
        connection =await new Promise((res,rej)=>{
            myMongoCli.connect((err,result)=>{
                if (err) {
                    console.log('Error in conection to mongo atlas');
                    console.error(err);
                }
                res(result.db());
            })
        })
        
    }
    return connection;
}

async function getAllData(collectionName:string) {
    return await connectToMongoAtlas().then(async (anyDb)=>{
        // console.log(anyDb);        
        return await anyDb?.collection(collectionName).find().toArray()
    })
}

function getOneData(collectionName:string,id:string) {
    return connectToMongoAtlas().then((anyDb)=>{
        let ObjectIdWantFind:ObjectId;
        try {
            ObjectIdWantFind = new ObjectId(id);
        } catch (error) {
            console.error("Id given can't be transformed in an objectId");
            return({
                error: 'Error ID'
            });
        }
        return anyDb?.collection(collectionName).findOne({_id:ObjectIdWantFind})
    })
}

export {
    getAllData,
    getOneData
}