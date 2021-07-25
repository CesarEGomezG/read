import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import jwt from "jsonwebtoken";
//import cookieParser from "cookie-parser";

import { connectToDatabase } from "../../../lib/mongo";
import { usarEstrategiaBasic } from "../../../lib/auth/strategies/basic";
//import establecerCookie from "../../../lib/establecerCookie"; //

usarEstrategiaBasic();

const iniciarSesion = async (req: NextApiRequest & { login: any }, res: NextApiResponse) => { // * Ojo, no incluí next
    if(req.method === "POST") {
        const tokenApiKey = process.env.ADMIN_API_KEY_TOKEN; // * Corregir: esto es provisional
        if(tokenApiKey) {
            try {
                const { db } = await connectToDatabase();
                passport.authenticate("basic", (error, usuario) => { //* Ojo, puede haber error porque no puse un try catch adentro
                    if(error || !usuario) return res.status(500).json({ error: "No estás autorizado" });

                    req.login(usuario, { session: false }, async (error) => {
                        if(error) return res.status(500).json({ error: "Algo salió mal" });

                        const apiKey = await db.collection("Permisos").findOne({ token: tokenApiKey });
                        if(!apiKey) return res.status(500).json({ error: "No estás autorizado" });

                        const { _id: idUsuario } = usuario;
                        const payload = {
                            sub: idUsuario,
                            scopes: apiKey.acciones
                        }
                        const token = jwt.sign(payload, process.env.AUTH_JWT_SECRET, { expiresIn: "15m" });

                        // establecerCookie(res, "tokenAut", token, { // * No tiene maxAge
                        //     httpOnly: process.env.MODO !== "development",
                        //     secure: process.env.MODO !== "development"
                        // });

                        return res.status(200).json({ mensaje: "Sesión iniciada con éxito", datos: { tokenAutenticacion: token, idUsuario } });
                    })
                })(req, res, null); // * Ojo, no tiene next
            } catch(error) {
                console.log("[Error] -> ", error.message);
                res.status(500).json({ error: "Algo salió mal" });
            }
        } else res.status(400).json({ error: "Faltan parámetros" });
    } else res.status(404).json({ error: "No existe la función buscada" });
}

export default iniciarSesion;