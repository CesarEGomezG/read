import React, { useState, useRef } from "react";
import Link from "next/link";
import Axios from "axios";

import BarraSuperiorLogo from "../components/BarraSuperiorLogo";

const CrearCuenta = () => {

    const estadoGlobal = null;

    const [nombres, setNombres] = useState<string>("");
    const [apellidos, setApellidos] = useState<string>("");
    const [fechaNacimiento, setFechaNacimiento] = useState<string>("");
    const [nombreUsuario, setNombreUsuario] = useState<string>("");
    const [correo, setCorreo] = useState<string>("");
    const [contrasenia, setContrasenia] = useState<string>("");
    const [confirmarContrasenia, setConfirmarContrasenia] = useState<string>("");
    const [genero, setGenero] = useState<string>("Femenino");

    const campoNombres = useRef(null);
    const campoApellidos = useRef(null);
    const campoFechaNacimiento = useRef(null);
    const campoNombreUsuario = useRef(null);
    const campoCorreo = useRef(null);
    const campoContrasenia = useRef(null);
    const campoConfirmarContrasenia = useRef(null);
    const campoGenero = useRef(null);

    const [mensajeError, setMensajeError] = useState<string>("");

    const cambioInput = (refCampo, modificadorEstado) => {
        modificadorEstado(refCampo.current.value);
    }

    const crearCuenta = async (evento) => {
        evento.preventDefault();
        if(contrasenia === confirmarContrasenia) {
            let nombresListos = nombres.split(" ");
            nombresListos = nombresListos.filter(nombre => nombre !== "");
            let apellidosListos = apellidos.split(" ");
            apellidosListos = apellidosListos.filter(apellido => apellido !== "");
            let correoListo = correo.toLowerCase();
            let generoListo = genero.toLowerCase();
            try {
                const { data: { datos: { idUsuario } } } = await Axios.post(`${process.env.NEXT_PUBLIC_URL_API}/usuarios`, {
                    nombreUsuario,
                    nombres: nombresListos,
                    apellidos: apellidosListos,
                    correo: correoListo,
                    contrasenia,
                    fechaNacimiento,
                    genero: generoListo
                });
                const { data: { datos: { usuario } } } = await Axios.get(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/${idUsuario}`);
            } catch(error) {
                setMensajeError(error.message);
            }
        }
    }

    return (
        <>
            <BarraSuperiorLogo />
            <div className="CrearCuenta">
                <p className="inicioSesion">Crear cuenta</p>
                <div className="botonGoogle">
                    <img src="/images/logoGoogle.png" />
                    <p>Registrarse con Google</p>
                </div>
                <p className="oIniciaSesionCon">O regístrate con:</p>
                <form onSubmit={crearCuenta}>
                    <input className="campo" type="text" placeholder="Nombre de usuario" ref={campoNombreUsuario} onChange={() => cambioInput(campoNombreUsuario, setNombreUsuario)} />
                    <input className="campo" type="text" placeholder="Correo electrónico" ref={campoCorreo} onChange={() => cambioInput(campoCorreo, setCorreo)} />
                    <input className="campo" type="text" placeholder="Nombre(s)" ref={campoNombres} onChange={() => cambioInput(campoNombres, setNombres)} />
                    <input className="campo" type="text" placeholder="Apellido(s)" ref={campoApellidos} onChange={() => cambioInput(campoApellidos, setApellidos)} />
                    <input className="campo" type="date" placeholder="Fecha de Nacimiento" ref={campoFechaNacimiento} onChange={() => cambioInput(campoFechaNacimiento, setFechaNacimiento)} />
                    <input className="campo" type="password" placeholder="Contraseña" ref={campoContrasenia} onChange={() => cambioInput(campoContrasenia, setContrasenia)} />
                    <input className="campo" type="password" placeholder="Confirmar contraseña" ref={campoConfirmarContrasenia} onChange={() => cambioInput(campoConfirmarContrasenia, setConfirmarContrasenia)} />
                    <select className="campo" ref={campoGenero} onChange={() => cambioInput(campoGenero, setGenero)}>
                        <option>Femenino</option>
                        <option>Masculino</option>
                        <option>Otro</option>
                    </select>
                    <button disabled={
                        nombreUsuario.length === 0 || correo.length === 0 || nombres.length === 0 || apellidos.length === 0 || fechaNacimiento.length === 0 || contrasenia.length === 0 || confirmarContrasenia.length === 0 || contrasenia !== confirmarContrasenia
                    }>Registrarse</button>
                </form>
                {
                    mensajeError &&
                    <p className="mensajeError">{mensajeError}</p>
                }
                <div className="crearCuenta">
                    <span>¿Ya tienes una cuenta? </span>
                    <Link href="/iniciar-sesion">Inicia sesión</Link>
                </div>
                <style jsx>{`
                    .CrearCuenta {
                        max-width: 425px;
                        margin: 0 auto 32px auto;
                        padding-top: 16px;
                    }
                    .CrearCuenta .inicioSesion {
                        font-size: 20px;
                        text-align: center;
                        margin: 0 0 24px 0;
                    }
                    .CrearCuenta .botonGoogle {
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
                    .CrearCuenta .botonGoogle img {
                        width: 20px;
                        height: 20px;
                        margin-right: 4px;
                    }
                    .CrearCuenta .oIniciaSesionCon {
                        text-align: center;
                        margin: 0 0 20px 0;
                    }
                    .CrearCuenta form {
                        text-align: center;
                        margin: 0 0 0px 0;
                    }
                    .CrearCuenta form .campo {
                        display: inline-block;
                        text-align: center;
                        width: 280px;
                        height: 28px;
                        margin: 0 auto 16px auto;
                        padding: 2px 0;
                        border-radius: 4px;
                    }
                    .CrearCuenta form button {
                        padding: 6px 12px;
                        display: block;
                        border-radius: 4px;
                        margin: 12px auto 0 auto;
                    }
                    .CrearCuenta .mensajeError {
                        margin: 24px auto 0 auto;
                        text-align: center;
                    }
                    .CrearCuenta .crearCuenta {
                        text-align: center;
                        margin: 36px 0 32px 0;
                    }

                    @media only screen and (min-width: 426px) {
                        .CrearCuenta {
                            border-radius: 4px;
                        }
                    }
                `}</style>
            </div>
        </>
    )
}

export default CrearCuenta;