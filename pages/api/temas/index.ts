import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../lib/mongo";

const temas = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET") {
        try {
            const { db } = await connectToDatabase();
            const temas = await db.collection("Temas").find({}).toArray();
            res.status(200).json({ mensaje: "Todos los temas obtenidos", datos: temas });
        } catch(error) {
            res.status(500).json({ error: "Algo salio mal" });
        }
    } else res.status(404).json({ error: "No existe la función buscada" });
}

export default temas;