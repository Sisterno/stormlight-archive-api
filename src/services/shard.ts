import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'shard'

export async function getAllShard() {
    let shardData = await getAllData(collectionName)
    return shardData;
}

export async function getOneShard(id:string) {
    let shardData = await getOneData(collectionName,id)
    return shardData;
}