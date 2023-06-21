import { getTravelsService } from "../services/travels.services.js"

export async function getTravels(req, res){
    const {page} = req.query

    try {
        const result = await getTravelsService(page)

        res.send(result)
    } catch (err){
        res.status(500).send(err.message)
    }
}