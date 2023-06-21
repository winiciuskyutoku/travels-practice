import { getTravelsRepository } from "../repositories/travels.repository.js";

export async function getTravelsService(page){
    if(page === '1' || page === undefined){
        page = 0;
    } else {
        page = Number(page) * 100
    }
    
    const result = await getTravelsRepository(page)

    return result
}