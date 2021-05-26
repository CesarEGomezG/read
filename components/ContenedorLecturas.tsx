import React from "react";
import ILecturaBasico from "../interfaces/ILecturaBasico";

interface IPropsContenedorLecturas {
    titulo: string,
    lecturas: ILecturaBasico[]
}

const ContenedorLecturas = ({ titulo, lecturas }: IPropsContenedorLecturas) => {
    return (
        <div className="ContenedorLecturas">
            <h2>{titulo}</h2>
            {
                lecturas && lecturas.length > 0 && lecturas.map(lectura => {
                    return(
                        <div className="lectura" key={lectura.idLectura}>
                            <div className="parteLectura">
                                <img src={lectura.imagen} alt="Imagen de la lectura" />
                                <h3>{lectura.titulo}</h3>
                            </div>
                            <div className="parteAutor">
                                <p>Autor {lectura.idAutor}</p>
                            </div>
                        </div>
                    );
                })
            }
            <style jsx>{`
                .ContenedorLecturas {
                    width: 100%;
                    background-color: lightblue;
                }
                .ContenedorLecturas .lectura {
                    background-color: lightgray;
                }
                .ContenedorLecturas .lectura .parteLectura img {
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default ContenedorLecturas;