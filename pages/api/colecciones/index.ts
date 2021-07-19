import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongo";

const colecciones = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET") {
        const { usuario } = req.query;
        if(usuario) {
            try {
                const { db } = await connectToDatabase();
                const datos = await db.collection("Colecciones").find({ usuario: ObjectId(usuario) }).toArray();
                res.status(200).json({ mensaje: "Todas las colecciones de un usuario obtenidas", datos });
            } catch(error) {
                console.log("[Error] -> ", error.message);
                res.status(500).json({ error: "Algo salio mal" });
            }
        } else res.status(400).json({ error: "Faltaron parámetros" });
    } else if(req.method === "POST" && req.query.usuario) {
        const { usuario } = req.query;
        const { nombre, imagen, privacidad } = req.body;
        if(nombre && imagen && privacidad) {
            // * Pendiente porque es necesario crear el componente Usuario
        } else res.status(400).json({ error: "Faltaron parámetros" });
    } else res.status(404).json({ error: "No existe la función buscada" });
}

export default colecciones;