import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import LibMongo from "../../../lib/mongo";

export const funcionExisteUsuario: (id: string) => Promise<boolean> = async (id) => {
    let mongo = new LibMongo();
    const usuario = await mongo.obtenerUnoPorFiltro("Usuarios", { _id: ObjectId(id) });
    mongo = null;
    if(usuario !== null) return true;
    else return false;
};

interface IFuncionCrearUsuario {
    (nombres: string[], apellidos: string[], fechaNacimiento: string, nombreUsuario: string, correo: string, contraseniaHasheada: string): Promise<string>;
}

export const funcionCrearUsuario: IFuncionCrearUsuario = async (nombres, apellidos, fechaNacimiento, nombreUsuario, correo, contraseniaHasheada) => {
    if(nombres && apellidos && fechaNacimiento && nombreUsuario && correo && contraseniaHasheada) {
        const mongo = new LibMongo();
        // Verificar si existe usuario con mismo nombre de usuario o correo
        const usuarioMismoNombreUsuario = await mongo.obtenerUnoPorFiltro("Usuarios", { nombreUsuario });
        const usuarioMismoCorreo = await mongo.obtenerUnoPorFiltro("Usuarios", { correo });
        if(usuarioMismoNombreUsuario === null && usuarioMismoCorreo === null) {
            // Crear usuario
            const idUsuario = await mongo.crear("Usuarios", { nombres, apellidos, fechaNacimiento, nombreUsuario, correo, contraseniaHasheada });
            return idUsuario;
        } else throw new Error("Ya existe un usuario con los mismos datos");
    } else throw new Error("Datos de entrada invalidos");
};

const usuarios = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send({ mensaje: "Aqui no hay nada" });
};

export default usuarios;