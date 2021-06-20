import React from "react";
import Link from "next/link";

const BarraSuperior = () => {
    return (
        <div className="BarraSuperior">
            <div className="izquierda">
                <Link href="/">
                    <h2 className="nombreApp">Read</h2>
                </Link>
            </div>
            <div className="buscador">
                <input type="text" placeholder="Buscar..." />
                <input type="button" value="Buscar" />
            </div>
            <div className="derecha">
                <Link href="/">
                    <img className="fotoPerfil" src={"https://media-exp1.licdn.com/dms/image/C4E03AQHMhlh-FBjnsw/profile-displayphoto-shrink_200_200/0/1621547009189?e=1629331200&v=beta&t=sOmlegtx8r1473BeQlAFPmXQde-dhJLpAx_1DOyG_MA"} alt="Foto de perfil del usuario" />
                </Link>
                <Link href="/">
                    <img className="botonMenu" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"} alt="Boton del menu desplegable" />
                </Link>
            </div>
            <style jsx>{`
                .BarraSuperior {
                    padding: 0 16px;
                    background-color: lightblue;
                    height: 56px;
                    display: flex;
                    justify-content: space-between;
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
                .BarraSuperior .derecha .fotoPerfil {
                    width: 32px;
                    height: 32px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .BarraSuperior .derecha .botonMenu {
                    margin-left: 16px;
                    width: 32px;
                    height: 32px;
                    object-fit: cover;
                }

                @media only screen and (min-width: 680px) {
                    .BarraSuperior .buscador {
                        display: flex;
                    }
                    .BarraSuperior .derecha .botonMenu {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default BarraSuperior;