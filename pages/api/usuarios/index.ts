import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectToDatabase } from "../../../lib/mongo";

const usuarios = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST") {
        const { nombreUsuario, nombres, apellidos, correo, contrasenia, imagenPerfil, fechaNacimiento, sexo } = req.body;
        if(nombreUsuario && nombres && apellidos && correo && contrasenia && imagenPerfil && fechaNacimiento && sexo ) {
            if(Array.isArray(nombres) && Array.isArray(apellidos)) {
                try {
                    const { db } = await connectToDatabase();
                    const usuarioMismoNombreUsuario = await db.collection("Usuarios").findOne({ nombreUsuario });
                    const usuarioMismoCorreo = await db.collection("Usuarios").findOne({ correo });
                    if(!usuarioMismoNombreUsuario && !usuarioMismoCorreo) {
                        const contraseniaHasheada = await bcrypt.hash(contrasenia, 10);
                        const usuario = {
                            nombreUsuario,
                            nombres,
                            apellidos,
                            correo,
                            contraseniaHasheada,
                            imagenPerfil,
                            fechaNacimiento,
                            sexo
                        };
                        const { insertedId } = await db.collection("Usuarios").insertOne(usuario);
                        res.status(201).json({ mensaje: "Usuario creado", datos: insertedId });
                    } else res.status(500).json({ error: "Ya existe un usuario con el mismo nombre de usuario o correo" });
                } catch(error) {
                    console.log("[Error] -> ", error.message);
                    res.status(500).json({ error: "Algo salio mal" });
                }
            } else res.status(400).json({ error: "Algunos parámteros traen formato incorrecto" });
        } else res.status(400).json({ error: "Faltan parámetros" });
    } else res.status(404).json({ error: "No existe la función buscada" });
};

export default usuarios;