import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";

const Acceso = () => {
    const [correo, setCorreo] = useState<string>("");
    const [contrasenia, setContrasenia] = useState<string>("");

    const campoCorreo = useRef(null);
    const campoContrasenia = useRef(null);

    const cambioCorreo = () => {
        setCorreo(campoCorreo.current.value);
    }

    const cambioContrasenia = () => {
        setContrasenia(campoContrasenia.current.value);
    }

    const iniciarSesion = async () => {
        const respuesta = await Axios.post("http://localhost:3000/api/autenticacion", {
            tipo: "correo",
            correo,
            contrasenia
        });
        console.log(respuesta);
    }

    return (
        <div className="IniciarSesion">
            <h1>Iniciar sesión</h1>
            <form>
                <label>
                    <span>Correo electrónico:</span>
                    <input type="text" ref={campoCorreo} onChange={cambioCorreo} />
                </label>
                <label>
                    <span>Contraseña:</span>
                    <input type="password" ref={campoContrasenia} onChange={cambioContrasenia} />
                </label>
                <input type="button" value="Iniciar sesión" onClick={iniciarSesion} />
            </form>
            <style jsx>{`
                .IniciarSesion h1 {
                    margin: 20px 0 16px 0;
                    text-align: center;
                }
                .IniciarSesion label * {
                    margin: 0 auto;
                    text-align: center;
                    display: block;
                }
                .IniciarSesion label span {
                    margin-bottom: 4px;
                }
                .IniciarSesion label input[type="text"], .IniciarSesion label input[type="password"] {
                    width: 240px;
                    padding: 4px 8px;
                    margin-bottom: 20px;
                    border-radius: 4px;
                }
                .IniciarSesion input[type="button"] {
                    padding: 6px 12px;
                    display: block;
                    margin: 32px auto 0 auto;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    )
}

export default Acceso;