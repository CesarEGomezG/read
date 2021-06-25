import React from "react";
import ILecturaBasico from "../interfaces/ILecturaBasico";
import Lectura from "../components/Lectura";

interface IPropsContenedorLecturas {
    titulo?: string,
    lecturas: ILecturaBasico[],
    pendientes?: boolean
}

const ContenedorLecturas = ({ titulo, lecturas, pendientes }: IPropsContenedorLecturas) => {
    return (
        <div className="ContenedorLecturas">
            <h2>{titulo}</h2>
            <ul>
                {
                    lecturas && lecturas.length > 0 && lecturas.map(lectura => {
                        return(
                            <li key={lectura.id}>
                                <Lectura lectura={lectura} pendiente={pendientes} />
                            </li>
                        );
                    })
                }
                {
                    lecturas && lecturas.length === 0 &&
                    <p className="mensajeVacio">Aqui se mostrarán las lecturas al cargar</p>
                }
            </ul> 
                <style jsx>{`
                    .ContenedorLecturas {
                        margin: 0 12px;
                    }
                    .ContenedorLecturas h2 {
                        margin: 12px 4px 8px 4px;
                    }
                    .ContenedorLecturas ul {
                        margin: 0;
                        padding: 0;
                        display: grid;
                        grid-template-columns: 1fr;
                        overflow: hidden;
                    }
                    .ContenedorLecturas li {
                        list-style-type: none;
                    }
                    .ContenedorLecturas ul .mensajeVacio {
                        margin: 0;
                    }
                    
                    @media only screen and (min-width: 426px) {
                        .ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 626px) {
                        ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 826px) {
                        .ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 1026px) {
                        .ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        }
                    }
                `}</style>
        </div>
    );
};

export default ContenedorLecturas;

