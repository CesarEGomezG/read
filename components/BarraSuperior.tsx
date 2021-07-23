import React, { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router"
import Link from "next/link";

const BarraSuperior = ({ usuario }) => {
    console.log("BarraSuperior -> ", usuario);

    const [ mostrarModal, setMostrarModal ] = useState(false);
    const [ mostrarBusqueda, setMostrarBusqueda ] = useState(false);
    useEffect(() => {
        if(Router.route.startsWith("/buscar") && document.querySelector("body #__next .BarraSuperior").scrollWidth < 680) {
            setMostrarBusqueda(true);
        } else {
            setMostrarBusqueda(false);
        }
        let posicionScrollPrevia = window.pageYOffset;
        window.onscroll = () => {
            let posicionScrollActual = window.pageYOffset;
            if(posicionScrollPrevia > posicionScrollActual) {
                document.getElementById("BarraSuperior").style.top = "0";
            } else if(posicionScrollPrevia < posicionScrollActual && posicionScrollActual > 56) {
                document.getElementById("BarraSuperior").style.top = "-56px";
                setMostrarModal(false);
            }
            posicionScrollPrevia = posicionScrollActual;
        }
        return () => {
            window.onscroll = null;
        }
    }, []);
    if(mostrarBusqueda) {
        return (
            <div id="BarraSuperior" className="BarraSuperior">
                <Head>
                    <title>Read | Plataforma de Lecturas</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <img src="/iconoRegresar.png" alt="Boton para regresar" onClick={() => setMostrarBusqueda(false)} />
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
            <div id="BarraSuperior" className="BarraSuperior">
                <Head>
                    <title>Read | Plataforma de Lecturas</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="izquierda">
                    <Link href="/">
                        <h2 className="nombreApp">Read</h2>
                    </Link>
                    <div className="buscador">
                        <input type="text" placeholder="Buscar lecturas, blogs, secciones y más..." />
                        <Link href="/buscar">
                            <input type="button" value="Buscar" />
                        </Link>
                    </div>
                </div>
                <div className="derecha">
                    <Link href="/explorar">
                        <p className="botonTexto">Explorar</p>
                    </Link>
                    <Link href="/suscripciones">
                        <p className="botonTexto">Suscripciones</p>
                    </Link>
                    <Link href="/leer-despues">
                        <p className="botonTexto">Leer después</p>
                    </Link>
                    <div className="lineaVertical"></div>
                    <Link href="/leer-despues">
                        <img className="botonIcono" src="/iconoLeerDespues.png" alt="Boton para ir a sección de Leer Después" />
                    </Link>
                    <Link href="/suscripciones">
                        <img className="botonIconoCuadrado" src="/iconoSuscripciones.png" alt="Boton para ir a sección de Suscripciones" />
                    </Link>
                    <Link href="/explorar">
                        <img className="botonIcono" src="/iconoExplorar.png" alt="Boton para ir a sección de Explorar" />
                    </Link>
                    <Link href="/buscar">
                        <img className="botonIcono iconoBuscar" src="/iconoBuscar.png" alt="Boton para buscar" onClick={() => setMostrarBusqueda(true)} />
                    </Link>
                    <img className="fotoPerfil" src={usuario ? usuario.imagenPerfil : ""} alt="Foto de perfil del usuario" onClick={() => setMostrarModal(!mostrarModal)} />
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
                        transition: top 0.3s;
                    }
                    .BarraSuperior .izquierda {
                        display: flex;
                        align-items: center;
                    }
                    .BarraSuperior .izquierda .nombreApp {
                        margin: 0;
                        font-size: 28px;
                    }
                    .BarraSuperior .izquierda .buscador {
                        display: none;
                        margin: auto 0 auto 16px;
                    }
                    .BarraSuperior .izquierda .buscador input[type="text"] {
                        width: 280px;
                        font-size: 14px;
                        padding: 6px 8px;
                    }
                    .BarraSuperior .izquierda .buscador input[type="button"] {
                        font-size: 14px;
                        padding: 6px 8px;
                    }
                    .BarraSuperior .derecha {
                        display: flex;
                        align-items: center;
                    }
                    .BarraSuperior .derecha .botonTexto {
                        display: none;
                        margin: 0 8px 0 8px;
                        font-size: 1em;
                        font-weight: bold;
                    }
                    .BarraSuperior .derecha .lineaVertical {
                        display: none;
                        background-color: rgba(0, 0, 0, 0.25);
                        width: 2px;
                        height: 40px;
                        margin-left: 4px;
                    }
                    .BarraSuperior .derecha .botonIcono {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        margin-left: 12px;
                    }
                    .BarraSuperior .derecha .botonIconoCuadrado {
                        width: 30px;
                        height: 30px;
                        margin-left: 12px;
                    }
                    .BarraSuperior .derecha .fotoPerfil {
                        width: 32px;
                        height: 32px;
                        object-fit: cover;
                        border-radius: 50%;
                        margin-left: 12px;
                    }

                    @media only screen and (min-width: 681px) {
                        .BarraSuperior .izquierda .buscador {
                            display: flex;
                        }
                        .BarraSuperior .derecha .iconoBuscar {
                            display: none;
                        }
                    }
                    @media only screen and (min-width: 819px) {
                        .BarraSuperior .derecha .botonTexto {
                            display: flex;
                        }
                        .BarraSuperior .derecha .lineaVertical {
                            display: flex;
                        }
                        .BarraSuperior .derecha .botonIcono {
                            display: none;
                        }
                        .BarraSuperior .derecha .botonIconoCuadrado {
                            display: none;
                        }
                    }
                `}</style>
            </div>
            {
                mostrarModal &&
                <div className="modal">
                    <p className="nombreUsuario">{usuario ? usuario.nombreUsuario : ""}</p>
                    <Link href={`/usuario/${usuario ? usuario._id : ""}`}>
                        <p className="opcion">Ver mi perfil</p>
                    </Link>
                    <Link href="/configuracion">
                        <p className="opcion">Configuración</p>
                    </Link>
                    <Link href="/iniciar-sesion">
                        <p className="opcion ultimaOpcion" onClick={() => console.log("No hace nada")}>Cerrar sesión</p>
                    </Link>
                    <style jsx>{`
                        .modal {
                            width: 130px;
                            padding: 8px 8px;
                            position: fixed;
                            top: 56px;
                            right: 0;
                            z-index: 1;
                            background: white;
                            border: 1px solid lightgray;
                            border-radius: 2px;
                            overflow: hidden;
                        }
                        .modal .nombreUsuario {
                            margin: 0 0 10px 0;
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
            }
        </>
    );
};

export default BarraSuperior;