import React from "react";
import ILecturaBasico from "../interfaces/ILecturaBasico";
import Lectura from "../components/Lectura";

interface IPropsContenedorLecturas {
    titulo?: string,
    lecturas: ILecturaBasico[],
    pendientes?: boolean,
    ocultarBlogs?: boolean
}

const ContenedorLecturas = ({ titulo, lecturas, pendientes, ocultarBlogs }: IPropsContenedorLecturas) => {
    return (
        <div className="ContenedorLecturas">
            <h2>{titulo}</h2>
            <ul>
                {
                    lecturas && lecturas.length > 0 && lecturas.map(lectura => {
                        return(
                            <li key={lectura.id}>
                                <Lectura lectura={lectura} pendiente={pendientes} ocultarBlog={ocultarBlogs} />
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
                    .ContenedorLecturas h2 {
                        margin: 0 6px 8px 6px;
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
                        margin: 0 0 0 6px;
                    }
                    
                    @media only screen and (min-width: 426px) {
                        .ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 691px) {
                        .ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 1021px) {
                        .ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 1351px) {
                        .ContenedorLecturas ul {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        }
                    }
                `}</style>
        </div>
    );
};

export default ContenedorLecturas;

