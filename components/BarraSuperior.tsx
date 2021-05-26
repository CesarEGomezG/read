import React from "react";

const BarraSuperior = () => {
    return (
        <div className="BarraSuperior">
            <div className="izquierda">
                <div>
                    <h2>Read</h2>
                </div>
            </div>
            <div className="derecha">
                <div>
                    <img src="" alt="Foto de perfil del usuario" />
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
            `}</style>
        </div>
    );
};

export default BarraSuperior;