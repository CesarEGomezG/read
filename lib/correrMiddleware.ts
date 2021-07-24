import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse, middleware: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        middleware(req, res, (respuesta) => {
            if(respuesta instanceof Error) return reject(respuesta);
            return resolve(respuesta);
        })
    })
}