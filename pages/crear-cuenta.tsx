import React, { useState, useRef } from "react";
import Axios from "axios";

const CrearCuenta = () => {
    const [mensajeError, setMensajeError] = useState<string>("");

    const [nombres, setNombre] = useState<string>("");
    const [apellidos, setApellido] = useState<string>("");
    const [fechaNacimiento, setFechaNacimiento] = useState<string>("");
    const [nombreUsuario, setNombreUsuario] = useState<Date>(new Date());
    const [correo, setCorreo] = useState<string>("");
    const [contrasenia, setContrasenia] = useState<string>("");

    const campoNombres = useRef(null);
    const campoApellidos = useRef(null);
    const campoFechaNacimiento = useRef(null);
    const campoNombreUsuario = useRef(null);
    const campoCorreo = useRef(null);
    const campoContrasenia = useRef(null);

    const cambioInput = (refCampo, modificadorEstado) => {
        modificadorEstado(refCampo.current.value);
    }

    const crearCuenta = async (evento) => {
        evento.preventDefault();
        try {
            const respuesta = await Axios.post("http://localhost:3000/api/autenticacion/crear-cuenta", {
                tipo: "correo",
                nombres,
                apellidos,
                fechaNacimiento,
                nombreUsuario,
                correo,
                contrasenia // Corregir: ALERTA DE SEGURIDAD !!!!!!!!!!!!
            });
            console.log(respuesta);
        } catch(error) {
            console.log(error);
            setMensajeError(error.message);
        }
    }

    return (
        <div className="CrearCuenta">
            <h1>Crear cuenta</h1>
            <form onSubmit={crearCuenta}>
                <label>
                    <span>Nombre(s):</span>
                    <input type="text" ref={campoNombres} onChange={() => cambioInput(campoNombres, setNombre)} />
                </label>
                <label>
                    <span>Apellido(s):</span>
                    <input type="text" ref={campoApellidos} onChange={() => cambioInput(campoApellidos, setApellido)} />
                </label>
                <label>
                    <span>Fecha de nacimiento:</span>
                    <input type="date" ref={campoFechaNacimiento} onChange={() => cambioInput(campoFechaNacimiento, setFechaNacimiento)} />
                </label>
                <label>
                    <span>Nombre de usuario:</span>
                    <input type="text" ref={campoNombreUsuario} onChange={() => cambioInput(campoNombreUsuario, setNombreUsuario)} />
                </label>
                <label>
                    <span>Correo electrónico:</span>
                    <input type="text" ref={campoCorreo} onChange={() => cambioInput(campoCorreo, setCorreo)} />
                </label>
                <label>
                    <span>Contraseña:</span>
                    <input type="password" ref={campoContrasenia} onChange={() => cambioInput(campoContrasenia, setContrasenia)} />
                </label>
                <button>Crear cuenta</button>
                <p>{mensajeError}</p>
            </form>
            <style jsx>{`
                .CrearCuenta h1 {
                    margin: 20px 0 16px 0;
                    text-align: center;
                }
                .CrearCuenta label * {
                    margin: 0 auto;
                    text-align: center;
                    display: block;
                }
                .CrearCuenta label span {
                    margin-bottom: 4px;
                }
                .CrearCuenta label input[type="text"], .CrearCuenta label input[type="password"], .CrearCuenta label input[type="date"] {
                    width: 240px;
                    padding: 4px 8px;
                    margin-bottom: 20px;
                    border-radius: 4px;
                }
                .CrearCuenta button {
                    padding: 6px 12px;
                    display: block;
                    margin: 32px auto 0 auto;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    )
}

export default CrearCuenta;