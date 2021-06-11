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
                            <li key={lectura.id}>
                                <Lectura lectura={lectura} />
                            </li>
                        );
                    })
                }
            </ul>
            <style jsx>{`
                ul {
                    padding: 0;
                    display: grid;
                    grid-template-columns: 1fr;
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
                
                @media only screen and (min-width: 426px) {
                    ul {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                @media only screen and (min-width: 626px) {
                    ul {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                @media only screen and (min-width: 826px) {
                    ul {
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                    }
                }
                @media only screen and (min-width: 1026px) {
                    ul {
                        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContenedorLecturas;