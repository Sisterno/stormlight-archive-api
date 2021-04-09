import { MongoClient, ObjectId, Db} from "mongodb";
import { config_var } from "../config";

const user = encodeURIComponent(config_var.dbuser);
const password = encodeURIComponent(config_var.dbpassword);
const dbname = encodeURIComponent(config_var.dbname)

const mongo_uri = `mongodb+srv://${user}:${password}@${config_var.dbhost}/${dbname}`;
console.log(mongo_uri)
class MongoLib {
    private client: MongoClient
    private dbName: String;
    private connection: Db|null
    constructor() {
        this.client = new MongoClient(mongo_uri,{ useUnifiedTopology: true });
        this.dbName = dbname;
        this.connection = null;
    }
    private async connect(){
        if (!this.connection) {
            this.connection = await new Promise((res,rej)=>{
                this.client.connect(err=>{
                    if(err){
                        console.log('ERROR')
                        console.log(err)
                        rej(err)
                    };
                    console.log('Connected succesfully to mongo');
                    res(this.client.db())
                })
            })
        }
        return this.connection;
    }
    getAll(collection:string){
        return this.connect().then((db)=>{
            return db?.collection(collection).find().toArray();
        })
    }
    get(collection:string,id:string){
        return this.connect().then((db)=>{
            let OID;
            try {
                OID = new ObjectId(id);
            } catch (error) {
                console.log('ERROR')
                console.log(error)
                return({
                    error: 'Error ID'
                });
            }
            return db?.collection(collection).findOne({_id:OID})
        })
    }
    create(collection:string,data:object){
        return this.connect().then((db)=>{
            return db?.collection(collection).insertOne(data)
        }).then(res => res?.insertedId);
    }

}
export {MongoLib};
