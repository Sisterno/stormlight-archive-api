import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'group'

export async function getAllGroup() {
    let groupData = await getAllData(collectionName)
    return groupData;
}

export async function getOneGroup(id:string) {
    let groupData = await getOneData(collectionName,id)
    return groupData;
}