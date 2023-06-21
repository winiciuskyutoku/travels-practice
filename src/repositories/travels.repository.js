import connection from "../database/database.js";

export async function getTravelsRepository(page) {

    const result = await connection.query(`
    select p."fullName", COUNT(p) as "viagens" FROM passengers as p
    JOIN passenger_travels ON passenger_travels."passengerId" = p.id
    JOIN travels ON travels.id = passenger_travels."travelId"
    GROUP BY p."fullName" 
    ORDER BY "viagens" desc
    OFFSET $1
    LIMIT 100;
    `, [page])

    return result.rows
}