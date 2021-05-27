import React from "react";
import ILecturaBasico from "../interfaces/ILecturaBasico";

interface IPropsLectura {
    lectura: ILecturaBasico
}

const Lectura = ({ lectura }: IPropsLectura) => {
    return (
        <div className="Lectura">
            <div className="parteLectura">
                <img src={lectura.imagen} alt="Imagen de la lectura" />
                <h3>{lectura.titulo}</h3>
            </div>
            <div className="parteAutor">
                <p>Autor {lectura.idAutor}</p>
            </div>
            <style jsx>{`
                .Lectura {
                    background-color: lightgray;
                }
                .Lectura .parteLectura img {
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default Lectura;