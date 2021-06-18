import React from "react";
import Link from "next/link";

interface IPropsBarraSuperior {
    urlFotoPerfil: string
}

const BarraSuperior = ({ urlFotoPerfil }: IPropsBarraSuperior) => {
    return (
        <div className="BarraSuperior">
            <div className="izquierda">
                <Link href="/">
                    <h2 className="nombreApp">Read</h2>
                </Link>
                <div className="buscador">
                    <input type="text" placeholder="Buscar..." />
                    <input type="button" value="Buscar" />
                </div>
            </div>
            <div className="derecha">
                <Link href="/">
                    <img className="fotoPerfil" src={urlFotoPerfil} alt="Foto de perfil del usuario" />
                </Link>
                <Link href="/">
                    <img className="botonMenu" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"} alt="Boton del menu desplegable" />
                </Link>
            </div>
            <style jsx>{`
                .BarraSuperior {
                    background-color: lightblue;
                    width: 100%;
                    height: 48px;
                    display: flex;
                    justify-content: space-between;
                }
                .BarraSuperior .izquierda {
                    display: flex;
                    align-items: center;
                }
                .BarraSuperior .izquierda .nombreApp {
                    margin: 0;
                    margin-left: 8px;
                }
                .BarraSuperior .izquierda .buscador {
                    margin-left: 8px;
                }
                .BarraSuperior .izquierda .buscador * {
                    border-radius: 4px;
                    padding: 4px 6px;
                }
                .BarraSuperior .izquierda .buscador input[type="text"] {
                    width: 160px;
                }
                .BarraSuperior .derecha {
                    display: flex;
                    align-items: center;
                }
                .BarraSuperior .derecha .fotoPerfil {
                    width: 32px;
                    height: 32px;
                    object-fit: cover;
                    border-radius: 50%;
                    margin-right: 16px;
                }
                .BarraSuperior .derecha .botonMenu {
                    width: 32px;
                    height: 32px;
                    object-fit: cover;
                    margin-right: 8px;
                }
            `}</style>
        </div>
    );
};

export default BarraSuperior;