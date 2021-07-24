import passport from "passport";
import { BasicStrategy } from "passport-http";
import bcrypt from "bcrypt";

import { connectToDatabase } from "../../mongo";

export const usarEstrategiaBasic = () => passport.use(new BasicStrategy(async (nombreUsuario, contrasenia, callback) => {
    try {
        const { db } = await connectToDatabase();
        let usuario = await db.collection("Usuarios").findOne({ nombreUsuario });
        
        if(!usuario) return callback(new Error("No estás autorizado"), null);
        if( !( await bcrypt.compare(contrasenia, usuario.contraseniaHasheada) ) ) return callback(new Error("No estás autorizado"), null);

        usuario.contraseniaHasheada = null;
        delete usuario.contraseniaHasheada;

        return callback(null, usuario);
    } catch(error) {
        return callback(error, null);
    }
}))