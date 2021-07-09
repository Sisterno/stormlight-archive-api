import { getAllData, getOneData } from "../lib/mongo_func";
const collectionName = 'book'

export async function getAllBook() {
    let bookData = await getAllData(collectionName)
    return bookData;
}

export async function getOneBook(id:string) {
    let bookData = await getOneData(collectionName,id)
    return bookData;
}