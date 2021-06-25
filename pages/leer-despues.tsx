import React from "react";

import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import mockLecturasBasico from "../mocks/lecturasBasico";

const PaginaLeerDespues = () => {
    return (
        <div className="PaginaLeerDespues">
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <ContenedorLecturas titulo={"Lecturas pendientes por leer"} lecturas={mockLecturasBasico} pendientes={true} />
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 68px;
                }
            `}</style>
        </div>
    )
}

export default PaginaLeerDespues;