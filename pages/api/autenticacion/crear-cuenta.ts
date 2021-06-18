import { NextApiRequest, NextApiResponse} from "next";
import bcrypt from "bcrypt";

import { funcionCrearUsuario } from "../usuarios";

const crearCuentaCorreo = async (req: NextApiRequest, res: NextApiResponse) => {
    const { nombres: textoNombres, apellidos: textoApellidos, fechaNacimiento, nombreUsuario: textoNombreUsuario, correo: textoCorreo, contrasenia } = req.body;
    if(textoNombres && textoApellidos && fechaNacimiento && textoNombreUsuario && textoCorreo && contrasenia) {
        const nombres: string[] = textoNombres.split(" ");
        const apellidos: string[] = textoApellidos.split(" ");
        const nombreUsuario: string = textoNombreUsuario.trim();
        const correo: string = textoCorreo.toLowerCase();
        const contraseniaHasheada: string = await bcrypt.hash(contrasenia, 10);
        try {
            const idUsuario: number = await funcionCrearUsuario(nombres, apellidos, fechaNacimiento, nombreUsuario, correo, contraseniaHasheada);
            res.status(201).send({ mensaje: "Cuenta creada", idUsuario });
        } catch(error) {
            console.log(`[ERROR] ${error.message}`);
            res.status(500).send({ mensaje: "Algo salio mal" });
        }
    } else res.status(400).send({ error: "Datos invalidos" });
}

const crearCuenta = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST" && req.body.tipo === "correo") crearCuentaCorreo(req, res);
    else res.status(404).send({ error: "Algo salio mal" });
}

export default crearCuenta;