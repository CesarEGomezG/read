import React, { useState, useRef } from "react";
import Link from "next/link";
import Axios from "axios";

import config from "../config";

const IniciarSesion = () => {
    const [nombreUsuario, setNombreUsuario] = useState<string>("");
    const [contrasenia, setContrasenia] = useState<string>("");

    const campoNombreUsuario = useRef(null);
    const campoContrasenia = useRef(null);

    const cambioInput = (refCampo, modificadorEstado) => {
        modificadorEstado(refCampo.current.value);
    }

    const iniciarSesion = async (evento) => {
        evento.preventDefault();
        await Axios.post(config.urlApi + "/autenticacion/iniciar-sesion", {
            tipo: "nombreUsuario",
            nombreUsuario,
            contrasenia
        });
    }

    return (
        <div className="IniciarSesion">
            <h1>Read</h1>
            <p className="inicioSesion">Iniciar sesión</p>
            <div className="botonGoogle">
                <img src="/images/logoGoogle.png" />
                <p>Iniciar sesión con Google</p>
            </div>
            <p className="oIniciaSesionCon">O inicia sesión con:</p>
            <form onSubmit={iniciarSesion}>
                <input className="campo" type="text" placeholder="Nombre de usuario" ref={campoNombreUsuario} onChange={() => cambioInput(campoNombreUsuario, setNombreUsuario)} />
                <input className="campo" type="password" placeholder="Contraseña" ref={campoContrasenia} onChange={() => cambioInput(campoContrasenia, setContrasenia)} />
                <button disabled={nombreUsuario.length === 0 || contrasenia.length === 0}>Iniciar sesión</button>
            </form>
            <div className="crearCuenta">
                <span>¿No tienes cuenta? </span>
                <Link href="/crear-cuenta">Registrate</Link>
            </div>
            <style jsx>{`
                .IniciarSesion {
                    max-width: 425px;
                    margin: 40px auto 40px auto;
                }
                .IniciarSesion h1 {
                    font-size: 36px;
                    margin: 20px 0 0 0;
                    text-align: center;
                }
                .IniciarSesion .inicioSesion {
                    font-size: 20px;
                    text-align: center;
                    margin: 0 0 32px 0;
                }
                .IniciarSesion .botonGoogle {
                    margin: 0 auto 20px auto;
                    width: 280px;
                    height: 28px;
                    padding: 2px 0;
                    color: black;
                    background-color: white;
                    border: 1px solid black;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .IniciarSesion .botonGoogle img {
                    width: 20px;
                    height: 20px;
                    margin-right: 4px;
                }
                .IniciarSesion .oIniciaSesionCon {
                    text-align: center;
                    margin: 0 0 20px 0;
                }
                .IniciarSesion form {
                    text-align: center;
                    margin: 0 0 36px 0;
                }
                .IniciarSesion form .campo {
                    display: inline-block;
                    text-align: center;
                    width: 280px;
                    height: 28px;
                    margin: 0 auto 16px auto;
                    padding: 2px 0;
                    border-radius: 4px;
                }
                .IniciarSesion form button {
                    padding: 6px 12px;
                    display: block;
                    border-radius: 4px;
                    margin: 12px auto 0 auto;
                }
                .IniciarSesion .crearCuenta {
                    text-align: center;
                    margin: 0 0 32px 0;
                }

                @media only screen and (min-width: 426px) {
                    .IniciarSesion {
                        border: 1px solid gray;
                        border-radius: 4px;
                    }
                }
            `}</style>
        </div>
    )
}

export default IniciarSesion;