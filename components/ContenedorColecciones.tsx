import React from "react";

import Coleccion from "./Coleccion";

const ContenedorColecciones = ({ colecciones }) => {
    return (
        <div className="ContenedorColecciones">
            {
                colecciones.map(coleccion => {
                    return (
                        <div key={coleccion.id}>
                            <Coleccion />
                        </div>
                    )
                })
            }
            <style jsx>{`
                .ContenedorColecciones {
                    margin-top: -6px;
                    display: grid;
                    grid-template-columns: 1fr;
                }

                @media only screen and (min-width: 426px) {
                    .ContenedorColecciones {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                @media only screen and (min-width: 769px) {
                    .ContenedorColecciones {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                @media only screen and (min-width: 1141px) {
                    .ContenedorColecciones {
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                    }
                }
            `}</style>
        </div>
    )
}

export default ContenedorColecciones;