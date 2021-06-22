import React from "react";
import Router from "next/router";

import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import lecturasBasico from "../mocks/lecturasBasico";

const Buscar = () => {
    return (
        <>
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <div>
                <ContenedorLecturas titulo={"Resultados de la búsqueda:"} lecturas={[]} />
            </div>
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 68px;
                }
            `}</style>
        </>
    )
}

export default Buscar;