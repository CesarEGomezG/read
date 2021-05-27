import React from "react";

interface IPropsBarraSuperior {
    urlFotoPerfil: string
}

const BarraSuperior = ({ urlFotoPerfil }: IPropsBarraSuperior) => {
    return (
        <div className="BarraSuperior">
            <div className="izquierda">
                <div>
                    <h2>Read</h2>
                </div>
            </div>
            <div className="derecha">
                <div>
                    <img className="fotoPerfil" src={urlFotoPerfil} alt="Foto de perfil del usuario" />
                </div>
                <div>
                    <img src="" alt="Boton del menu desplegable" />
                </div>
            </div>
            <style jsx>{`
                .BarraSuperior {
                    background-color: lightblue;
                    width: 100%;
                }
                .BarraSuperior .derecha .fotoPerfil {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 50%;
                }
            `}</style>
        </div>
    );
};

export default BarraSuperior;