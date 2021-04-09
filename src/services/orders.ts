import { orders } from "../utils/mocks/characters";


class serv_orders {
    constructor(){

    }
    async getOrders(){
        return await Promise.resolve(orders);
    }
    async getOrder(id:number) {
        return orders[id];
    }

}
export {serv_orders};