import React, { useState, useRef } from "react";
import Axios from "axios";

const IniciarSesion = () => {
    console.log("Esta es la url de la API -> " + (process.env.URL_API || "http://localhost:3000/api/"));
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

    const iniciarSesion = async (evento) => {
        evento.preventDefault();
        const respuesta = await Axios.post("http://localhost:3000/api/autenticacion/iniciar-sesion", {
            tipo: "correo",
            correo,
            contrasenia
        });
        console.log(respuesta);
    }

    return (
        <div className="IniciarSesion">
            <h1>Iniciar sesión</h1>
            <form onSubmit={iniciarSesion}>
                <label>
                    <span>Correo electrónico:</span>
                    <input type="text" ref={campoCorreo} onChange={cambioCorreo} />
                </label>
                <label>
                    <span>Contraseña:</span>
                    <input type="password" ref={campoContrasenia} onChange={cambioContrasenia} />
                </label>
                <button>Iniciar sesión</button>
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

export default IniciarSesion;