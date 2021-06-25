import React from "react";
import Router from "next/router";

import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

const PaginaBuscar = () => {
    return (
        <>
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <div className="PaginaBuscar">
                <ContenedorLecturas titulo={"Resultados de la búsqueda:"} lecturas={[]} />
            </div>
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 56px;
                }
                .PaginaBuscar {
                    padding: 12px;
                }
            `}</style>
        </>
    )
}

export default PaginaBuscar;