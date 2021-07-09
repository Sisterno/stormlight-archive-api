import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'power'

export async function getAllPower() {
    let powerData = await getAllData(collectionName)
    return powerData;
}

export async function getOnePower(id:string) {
    let powerData = await getOneData(collectionName,id)
    return powerData;
}