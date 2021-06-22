import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import lecturasBasico from "../mocks/lecturasBasico";

const Principal = () => {
    return (
        <div>
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <ContenedorLecturas titulo="Lecturas de blogs a los que estoy suscrito" lecturas={lecturasBasico} />
            <ContenedorLecturas titulo="Lecturas recomendadas" lecturas={lecturasBasico} />
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 68px;
                }
            `}</style>
        </div>
    )
};

export default Principal;