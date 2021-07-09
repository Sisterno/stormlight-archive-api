import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'event'

export async function getAllEvent() {
    let eventData = await getAllData(collectionName)
    return eventData;
}

export async function getOneEvent(id:string) {
    let eventData = await getOneData(collectionName,id)
    return eventData;
}