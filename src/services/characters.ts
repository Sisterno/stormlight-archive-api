import { serv_orders } from "./orders";
import { MongoLib } from "../lib/mongo";
const collection='character';

class serv_characters {
    private db = new MongoLib()
    private orders = new serv_orders();
    async getCharacters() {
        const char= await this.db.getAll(collection)
        console.log(char)
        return {
            characters: char,
            orders: await this.orders.getOrders()
        };
    }
    async getCharacter(id: string) {
        let temp_character=this.db.get(collection,id);

        return temp_character;
    }
    async createCharacter(data: object) {
        return this.db.create(collection,data);
    }

}
export { serv_characters };