import { NextApiRequest, NextApiResponse } from "next";

const prueba = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == "GET") {
        console.log("Hiciste un get");
    } else if(req.method == "POST") {
        console.log("Hiciste un post");
    }
    res.status(200).json({
        mensaje: "hola",
        url: req.url,
        method: req.method,
        statusCodeReq: req.statusCode,
        query: req.query,
        body: req.body,
        statusCodeRes: res.statusCode
    });
}

export default prueba;