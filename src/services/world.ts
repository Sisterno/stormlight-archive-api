import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'world'

export async function getAllWorld() {
    let worldData = await getAllData(collectionName)
    return worldData;
}

export async function getOneWorld(id:string) {
    let worldData = await getOneData(collectionName,id)
    return worldData;
}