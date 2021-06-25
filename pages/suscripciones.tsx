import React from "react";

import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import mockLecturasBasico from "../mocks/lecturasBasico";

const PaginaSuscripciones = () => {
    return (
        <div className="PaginaSuscripciones">
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <ContenedorLecturas titulo={"Lecturas recientes de los blogs a los que estoy suscrito"} lecturas={mockLecturasBasico} />
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 68px;
                }
            `}</style>
        </div>
    )
}

export default PaginaSuscripciones;