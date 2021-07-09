import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'location'

export async function getAllLocation() {
    let locationData = await getAllData(collectionName)
    return locationData;
}

export async function getOneLocation(id:string) {
    let locationData = await getOneData(collectionName,id)
    return locationData;
}