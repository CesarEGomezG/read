import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import lecturasBasico from "../mocks/lecturasBasico";

const Principal = () => {
    return (
        <div className="PaginaPrincipal">
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <ContenedorLecturas titulo="Lecturas de blogs a los que estoy suscrito" lecturas={lecturasBasico} />
            <ContenedorLecturas titulo="Lecturas recomendadas" lecturas={lecturasBasico} />
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 56px;
                }
                .PaginaPrincipal {
                    padding: 12px;
                }
            `}</style>
        </div>
    )
};

export default Principal;