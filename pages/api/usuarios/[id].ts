import { NextApiRequest, NextApiResponse } from "next";
import LibMongo from "../../../lib/mongo";

import { funcionExisteUsuario } from ".";

const eliminarUsuario = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id: textoIdUsuario } = req.query;
    if(textoIdUsuario) {
        const idUsuario = textoIdUsuario as string;
        const mongo = new LibMongo();
        if(await funcionExisteUsuario(idUsuario) === true) {
            await mongo.eliminar("Usuarios", idUsuario);
            res.status(200).send({ mensaje: "Usuario eliminado" });

            // Falta ver que pasa con todas las dependencias en la base de datos
            
        } else res.status(400).send({ mensaje: "No existe el usuario que se busca eliminar" });
    } else res.status(400).send({ mensaje: "No se recibió textoIdUsuario" });
};

const usuariosId = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "DELETE") eliminarUsuario(req, res);
    else res.status(404).send({ mensaje: "Algo salio mal" });
};

export default usuariosId;