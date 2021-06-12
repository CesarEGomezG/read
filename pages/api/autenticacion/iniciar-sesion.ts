import { NextApiRequest, NextApiResponse} from "next";

const iniciarSesionCorreo = (req: NextApiRequest, res: NextApiResponse) => {
    const datos = {
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        token: "1234567890"
    };
    console.log(datos);
    res.status(200).send(datos);
}

const iniciarSesion = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST" && req.body.tipo === "correo") iniciarSesionCorreo(req, res);
    else res.status(400).send("Algo salio mal");
}

export default iniciarSesion;