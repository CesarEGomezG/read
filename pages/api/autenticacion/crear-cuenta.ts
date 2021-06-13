import LibMongo from "../../../lib/mongo";
import { NextApiRequest, NextApiResponse} from "next";

const crearCuentaCorreo = async (req: NextApiRequest, res: NextApiResponse) => {
    const { nombres: textoNombres, apellidos: textoApellidos, fechaNacimiento, nombreUsuario: textoNombreUsuario, correo: textoCorreo, contrasenia } = req.body;
    if(textoNombres && textoApellidos && fechaNacimiento && textoNombreUsuario && textoCorreo && contrasenia) {
        const mongo = new LibMongo();
        // Procesar datos
        const contraseniaEncriptada = contrasenia.toUpperCase(); // Corregir
        const nombres: string[] = textoNombres.split(" ");
        const apellidos: string[] = textoApellidos.split(" ");
        const nombreUsuario: string = textoNombreUsuario.trim();
        const correo: string = textoCorreo.toLowerCase();
        // Verificar si existe usuario con mismo nombre de usuario o correo
        const usuarioMismoNombreUsuario = await mongo.obtenerUnoPorFiltro("Usuarios", { nombreUsuario });
        const usuarioMismoCorreo = await mongo.obtenerUnoPorFiltro("Usuarios", { correo });
        if(usuarioMismoNombreUsuario === null && usuarioMismoCorreo === null) {
            // Crear usuario
            const idUsuario = await mongo.crear("Usuarios", { nombres, apellidos, fechaNacimiento, nombreUsuario, correo, contraseniaEncriptada });
            res.status(201).send({ mensaje: `Usuario ${idUsuario} creado` });
        } else res.status(409).send({ error: "ya existe un usuario con los mismo datos" })
    } else res.status(400).send({ error: "datos invalidos" });
}

const crearCuenta = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST" && req.body.tipo === "correo") crearCuentaCorreo(req, res);
    else res.status(400).send({ error: "algo salio mal" });
}

export default crearCuenta;