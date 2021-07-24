import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

import { connectToDatabase } from "../../mongo";

export const usarEstrategiaJwt = () => passport.use(
    new Strategy({
        secretOrKey: process.env.AUTH_JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (payloadToken, callback) => {
        try {
            const { db } = await connectToDatabase();
            const usuario = db.collection("Usuarios").findOne({ nombreUsuario: payloadToken.username }); // * Ojo, se llama username, no nombreUsuario

            if(!usuario) return callback(new Error("No estás autorizado"), null);

            usuario.contraseniaHasheada = null;
            delete usuario.contraseniaHasheada;

            return callback(null, { ...usuario, permisos: payloadToken.scopes }); // * Ojo, se llama scopes, no permisos
        } catch(error) {
            return callback(error, null);
        }
    }));