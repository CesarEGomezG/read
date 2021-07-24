import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import BarraSuperiorLogo from "../components/BarraSuperiorLogo";

const IniciarSesion = () => {
    const router = useRouter();

    const [nombreUsuario, setNombreUsuario] = useState<string>("");
    const [contrasenia, setContrasenia] = useState<string>("");

    const campoNombreUsuario = useRef(null);
    const campoContrasenia = useRef(null);

    const [mensajeError, setMensajeError] = useState<string>("");

    const cambioInput = (refCampo, modificadorEstado) => {
        modificadorEstado(refCampo.current.value);
    }

    const iniciarSesion = async (evento) => {
        evento.preventDefault();
        try {
            const { data: { datos: { tokenAutenticacion, idUsuario } } } = await axios.post(process.env.NEXT_PUBLIC_URL_API + "/auth/iniciar-sesion", null, {
                auth: {
                    username: nombreUsuario,
                    password: contrasenia
                }
            });
            document.cookie = `token=${tokenAutenticacion}`;

            const { data: { datos: { usuario } } } = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/${idUsuario}`, {
                headers: {
                    "Authorization": `Bearer ${tokenAutenticacion}`
                }
            });
            sessionStorage.setItem("usuario", JSON.stringify(usuario));

            router.push("/");
        } catch(error) {
            setMensajeError(error.message);
        }
    }

    return (
        <>
            <BarraSuperiorLogo />
            <div className="IniciarSesion">
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
                {
                    mensajeError &&
                    <p className="mensajeError">{mensajeError}</p>
                }
                <div className="crearCuenta">
                    <span>¿No tienes cuenta? </span>
                    <Link href="/crear-cuenta">Registrate</Link>
                </div>
                <style jsx>{`
                    .IniciarSesion {
                        max-width: 425px;
                        margin: 0px auto 32px auto;
                        padding-top: 16px;
                    }
                    .IniciarSesion .inicioSesion {
                        font-size: 20px;
                        text-align: center;
                        margin: 0 0 24px 0;
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
                        margin: 0;
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
                    .IniciarSesion .mensajeError {
                        margin: 24px auto 0 auto;
                        text-align: center;
                    }
                    .IniciarSesion .crearCuenta {
                        text-align: center;
                        margin: 28px 0 32px 0;
                    }

                    @media only screen and (min-width: 426px) {
                        .IniciarSesion {
                            border-radius: 4px;
                        }
                    }
                `}</style>
            </div>
        </>
    )
}

export default IniciarSesion;