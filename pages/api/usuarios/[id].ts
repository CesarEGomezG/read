import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongo";

const usuariosId = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET") {
        const { id } = req.query;
        try {
            const { db } = await connectToDatabase();
            const usuario = await db.collection("Usuarios").findOne({ _id: ObjectId(id) });
            if(usuario) res.status(200).json({ mensaje: "Usuario obtenido", datos: usuario });
            else res.status(404).json({ error: "No existe el usuario buscado" });
        } catch(error) {
            console.log("[Error] -> ", error.message);
            res.status(500).json({ error: "Algo salio mal" });
        }
    } else res.status(404).json({ error: "No existe la función buscada" });
};

export default usuariosId;