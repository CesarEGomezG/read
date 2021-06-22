import React, { useEffect, useState } from "react";
import Router from "next/router"
import Link from "next/link";

const BarraSuperior = () => {
    const [busqueda, setBusqueda] = useState(false);
    useEffect(() => {
        if(Router.route.startsWith("/buscar") && document.querySelector("body #__next .BarraSuperior").scrollWidth < 680) {
            setBusqueda(true);
        } else {
            setBusqueda(false);
        }
    }, []);
    if(busqueda) {
        return (
            <div className="BarraSuperior">
                <img src="/iconoRegresar.png" alt="Boton para regresar" onClick={() => setBusqueda(false)} />
                <input type="text" placeholder="Buscar..." autoFocus />
                <style jsx>{`
                    .BarraSuperior {
                        padding: 0 16px;
                        background-color: lightblue;
                        height: 56px;
                        display: grid;
                        grid-template-columns: 36px 1fr;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1;
                    }
                    .BarraSuperior img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        margin: auto 4px auto 0;
                    }
                    .BarraSuperior input[type="text"] {
                        height: 20px;
                        margin: auto 0;
                        font-size: 14px;
                        padding: 6px 8px;
                    }
                `}</style>
            </div>
        )
    } else return (
        <>
            <div className="BarraSuperior">
                <div className="izquierda">
                    <Link href="/">
                        <h2 className="nombreApp">Read</h2>
                    </Link>
                </div>
                <div className="buscador">
                    <input type="text" placeholder="Buscar..." />
                    <Link href="/buscar">
                        <input type="button" value="Buscar" />
                    </Link>
                </div>
                <div className="derecha">
                    <Link href="/explorar">
                        <img className="botonExplorar" src="/iconoExplorar.png" alt="Boton para explorar" />
                    </Link>
                    <Link href="/buscar">
                        <img className="botonBuscar" src="/iconoBuscar.png" alt="Boton para buscar" onClick={() => setBusqueda(true)} />
                    </Link>
                    <Link href="/usuario/0">
                        <img className="fotoPerfil" src={"https://media-exp1.licdn.com/dms/image/C4E03AQH_x3mmyCFW_w/profile-displayphoto-shrink_200_200/0/1624242119528?e=1629936000&v=beta&t=bzeOG3eJr6FHpvqivwMLQJHoX0pa1SFvAwODcw-GRwM"} alt="Foto de perfil del usuario" />
                    </Link>
                </div>
                <style jsx>{`
                    .BarraSuperior {
                        padding: 0 16px;
                        background-color: lightblue;
                        height: 56px;
                        display: flex;
                        justify-content: space-between;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1;
                    }
                    .BarraSuperior .izquierda {
                        display: flex;
                        align-items: center;
                    }
                    .BarraSuperior .izquierda .nombreApp {
                        margin: 0;
                        font-size: 28px;
                    }
                    .BarraSuperior .buscador {
                        display: none;
                        margin: auto 0;
                    }
                    .BarraSuperior .buscador input[type="text"] {
                        width: 360px;
                        font-size: 14px;
                        padding: 6px 8px;
                    }
                    .BarraSuperior .buscador input[type="button"] {
                        font-size: 14px;
                        padding: 6px 8px;
                    }
                    .BarraSuperior .derecha {
                        display: flex;
                        align-items: center;
                    }
                    .BarraSuperior .derecha .botonExplorar {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }
                    .BarraSuperior .derecha .botonBuscar {
                        margin-left: 12px;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }
                    .BarraSuperior .derecha .fotoPerfil {
                        width: 32px;
                        height: 32px;
                        object-fit: cover;
                        border-radius: 50%;
                        margin-left: 12px;
                    }

                    @media only screen and (min-width: 680px) {
                        .BarraSuperior .buscador {
                            display: flex;
                        }
                        .BarraSuperior .derecha .botonExplorar {
                            display: none;
                        }
                        .BarraSuperior .derecha .botonBuscar {
                            display: none;
                        }
                        .BarraSuperior .derecha .botonMenu {
                            display: none;
                        }
                    }
                `}</style>
            </div>
            <div className="modal">
                <p className="nombreUsuario">CesarEGomezG755</p>
                <Link href={`/usuario/${"0"}`}>
                    <p className="opcion">Ver mi perfil</p>
                </Link>
                <Link href="/configuracion">
                    <p className="opcion">Configuración</p>
                </Link>
                <Link href="/iniciar-sesion">
                    <p className="opcion ultimaOpcion">Cerrar sesión</p>
                </Link>
                <style jsx>{`
                    .modal {
                        width: 150px;
                        padding: 8px 4px;
                        position: fixed;
                        top: 56px;
                        right: 0;
                        z-index: 1;
                        background: white;
                        border: 1px solid lightgray;
                        border-radius: 2px;
                    }
                    .modal .nombreUsuario {
                        margin: 0 0 8px 0;
                        padding-bottom: 8px;
                        border-bottom: 1px solid lightgray;
                        font-weight: bold;
                    }
                    .modal .opcion {
                        margin: 0 0 16px 0;
                    }
                    .modal .ultimaOpcion {
                        margin: 0 0 4px 0;
                    }
                `}</style>
            </div>
        </>
    );
};

export default BarraSuperior;