import { NextApiRequest, NextApiResponse } from "next";
import LibMongo from "../../../../lib/mongo";

const metodoGet = async (req: NextApiRequest, res: NextApiResponse) => {
    const libMongo = new LibMongo();
    const resultados = await libMongo.obtener("Lecturas", {});
    res.status(200).json(resultados);
}

const lecturasCompletoId = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET") metodoGet(req, res);
    else res.status(400).send("Algo salio mal");
}

export default lecturasCompletoId;