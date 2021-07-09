import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'culture'

export async function getAllCulture() {
    let cultureData = await getAllData(collectionName)
    return cultureData;
}

export async function getOneCulture(id:string) {
    let cultureData = await getOneData(collectionName,id)
    return cultureData;
}