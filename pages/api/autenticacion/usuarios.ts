import LibMongo from "../../../lib/mongo";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse} from "next";

const crearCuenta = async (req: NextApiRequest, res: NextApiResponse) => {
    const { nombre, apellido, fechaNacimiento, nombreUsuario, correo, contrasenia } = req.body;
    const contraseniaEncriptada = bcrypt.hash(contrasenia, 10);
    const mongo = new LibMongo();
    const idUsuario = await mongo.crear("Usuarios", { nombre, apellido, fechaNacimiento, nombreUsuario, correo, contraseniaEncriptada });
    res.status(201).send(`Usuario ${idUsuario} creado`);
}

const usuarios = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST" && req.body.tipo === "correo") crearCuenta(req, res);
    else res.status(400).send("Algo salio mal");
}

export default usuarios;