import React from "react";
import Router from "next/router";

import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import lecturasBasico from "../mocks/lecturasBasico";

const Buscar = () => {
    return (
        <>
            <BarraSuperior />
            <div>
                <ContenedorLecturas titulo={"Resultados de la búsqueda:"} lecturas={[]} />
            </div>
        </>
    )
}

export default Buscar;