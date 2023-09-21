import { NextApiRequest, NextApiResponse } from "next";
import { FALTAN_PARAMETROS, NO_ESTAS_AUTENTICADO } from "../lib/mensajes";

const endpointVerUsuario = async (req: NextApiRequest & { user: any }, res: NextApiResponse) => {
    // Revisar si el usuario no está autenticado
    if(typeof req.user === "undefined") {
        res.status(401).send(NO_ESTAS_AUTENTICADO)
    }
    // Revisar si faltan parámetros
    const { user: { id } } = req
    let parametros: any[]
    parametros.push(id)
    const parametrosInexistentes = parametros.map(parametro => typeof parametro)
    const posicionParametroInexistente = parametrosInexistentes.findIndex(parametro => parametro === "undefined")
    if(posicionParametroInexistente !== -1) {
        res.status(400).send(FALTAN_PARAMETROS)
    }
    // Revisar los tipos de datos
    const formatoUser = {
        id: "number"
    }
    // ***** const parametros
}

export default endpointVerUsuario