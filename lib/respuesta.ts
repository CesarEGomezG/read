import { NextApiRequest, NextApiResponse} from "next";

export const exito = (req: NextApiRequest, res: NextApiResponse, estado: number, mensaje: string, datos?: any) => {
    if(datos) res.status(estado).json({ mensaje, datos });
    else res.status(estado).json({ mensaje });
};

export const error = (req: NextApiRequest, res: NextApiResponse, estado: number, error: string, objetoError?: any) => {
    if(objetoError) console.log("[ERROR] -> ", objetoError);
    res.status(estado).json({ error });
}