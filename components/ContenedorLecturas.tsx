import React from "react";
import ILecturaBasico from "../interfaces/ILecturaBasico";
import Lectura from "../components/Lectura";

interface IPropsContenedorLecturas {
    titulo: string,
    lecturas: ILecturaBasico[]
}

const ContenedorLecturas = ({ titulo, lecturas }: IPropsContenedorLecturas) => {
    return (
        <div className="ContenedorLecturas">
            <h2>{titulo}</h2>
            <ul>
                {
                    lecturas && lecturas.length > 0 && lecturas.map(lectura => {
                        return(
                            <li key={lectura.idLectura}>
                                <Lectura lectura={lectura} />
                            </li>
                        );
                    })
                }
            </ul>
            <style jsx>{`
                ul {
                    padding: 0;
                }
                li {
                    list-style-type: none;
                }
                .ContenedorLecturas {
                    width: 100%;
                }
                .ContenedorLecturas h2 {
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default ContenedorLecturas;