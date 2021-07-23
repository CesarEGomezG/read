import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongo";

// * Falta funcion de cambiar contrasenia

const usuariosId = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET") {
        const { id } = req.query;
        if(id) {
            try {
                const { db } = await connectToDatabase();
                let usuario = await db.collection("Usuarios").findOne({ _id: ObjectId(id) });
                usuario.contraseniaHasheada = "";
                delete usuario.contraseniaHasheada;
                if(usuario) res.status(200).json({ mensaje: "Usuario obtenido", datos: { usuario } });
                else res.status(404).json({ error: "No existe el usuario buscado" });
            } catch(error) {
                console.log("[Error] -> ", error.message);
                res.status(500).json({ error: "Algo salió mal" });
            }
        } else res.status(400).json({ error: "Faltan parámetros" });
        
    } else if(req.method === "PATCH") {
        const { id } = req.query;
        const { nombreUsuario, nombreCompleto, correo, telefono, imagenPerfil, fechaNacimiento, genero, lugar, contacto, presentacion } = req.body;
        if(id && (nombreUsuario || nombreCompleto || correo || telefono || imagenPerfil || fechaNacimiento || genero || lugar || contacto || presentacion)) {
            try {
                const { db } = await connectToDatabase();
                const usuario = await db.collection("Usuarios").findOne({ _id: ObjectId(id) });
                if(nombreUsuario && typeof nombreUsuario === "string" && await db.collection("Usuarios").findOne({ nombreUsuario }) === null) usuario.nombreUsuario = nombreUsuario;
                if(nombreCompleto && typeof nombreCompleto === "object" && nombreCompleto.nombres && nombreCompleto.apellidos && Array.isArray(nombreCompleto.nombres) && Array.isArray(nombreCompleto.apellidos) && nombreCompleto.nombres.length > 0 && nombreCompleto.apellidos.length > 0) {
                    usuario.nombreCompleto.nombres = nombreCompleto.nombres;
                    usuario.nombreCompleto.apellidos = nombreCompleto.apellidos;
                }
                if(correo && typeof correo === "string" && await db.collection("Usuarios").findOne({ correo }) === null) usuario.correo = correo;
                if(telefono && typeof telefono === "number" && await db.collection("Usuarios").findOne({ telefono }) == null) usuario.telefono = telefono;
                if(imagenPerfil && typeof imagenPerfil === "string") usuario.imagenPerfil = imagenPerfil;
                if(fechaNacimiento && typeof fechaNacimiento === "string") usuario.fechaNacimiento = fechaNacimiento;
                if(genero && typeof genero === "string") usuario.genero = genero;
                if(lugar && typeof lugar === "object" && lugar.ciudad && lugar.estado && lugar.pais && typeof lugar.ciudad === "string" && typeof lugar.estado === "string" && typeof lugar.pais === "string") {
                    usuario.lugar.ciudad = lugar.ciudad;
                    usuario.lugar.estado = lugar.estado;
                    usuario.lugar.pais = lugar.pais;
                }
                if(contacto && typeof contacto === "object" && contacto.sitioWeb && contacto.correo && contacto.facebook && contacto.twitter && contacto.instagram && contacto.youtube && contacto.tiktok && contacto.linkedIn) {
                    usuario.contacto.sitioWeb = contacto.sitioWeb;
                    usuario.contacto.correo = contacto.correo;
                    usuario.contacto.facebook = contacto.facebook;
                    usuario.contacto.twitter = contacto.twitter;
                    usuario.contacto.instagram = contacto.instagram;
                    usuario.contacto.youtube = contacto.youtube;
                    usuario.contacto.tiktok = contacto.tiktok;
                    usuario.contacto.linkedIn = contacto.linkedIn;
                }
                if(presentacion && typeof presentacion === "string") usuario.presentacion = presentacion;
                // * intereses, blogs, blogsSeguidos, colecciones, leerDespues
                await db.collection("Usuarios").replaceOne({ _id: ObjectId(id) }, usuario);
                res.status(201).json({ mensaje: "Usuario modificado" });
            } catch(error) {
                console.log("[Error] -> ", error.message);
                res.status(500).json({ error: "Algo salió mal" });
            }
        } else res.status(400).json({ error: "Faltan parámetros" });
    } else res.status(404).json({ error: "No existe la función buscada" });
};

export default usuariosId;