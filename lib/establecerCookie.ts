import { NextApiResponse } from "next";
import { serialize, CookieSerializeOptions } from "cookie";

export default (
    res: NextApiResponse,
    nombre: string,
    valor: any,
    opciones: CookieSerializeOptions = {}
) => {
    const valorTexto = JSON.stringify(valor);

    if("maxAge" in opciones) {
        opciones.expires = new Date(Date.now() + opciones.maxAge);
        opciones.maxAge /= 1000;
    }

    res.setHeader("Set-Cookie", serialize(nombre, String(valorTexto), opciones))
}; 