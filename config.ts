const config = {
    modo: process.env.NODE_ENV,
    nombreBaseDatos: process.env.DB_NAME,
    contraseniaMongo: process.env.MONGO_PASSWORD,
    urlApi: process.env.NEXT_PUBLIC_URL_API,
    secretoJWT: process.env.AUTH_JWT_SECRET,
    contraseniaAdministrador: process.env.DEFAULT_ADMIN_PASSWORD,
    contraseniaUsuario: process.env.DEFAULT_USER_PASSWORD,
    apiKeyTokenAdministrador: process.env.ADMIN_API_KEY_TOKEN,
    apiKeyTokenUsuario: process.env.USER_API_KEY_TOKEN
};

export default config;