import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import lecturasBasico from "../mocks/lecturasBasico";
const lecturasBasicoGrande = [...lecturasBasico, ...lecturasBasico, ...lecturasBasico];

const Principal = () => {
    return (
        <div>
            <BarraSuperior />
            <ContenedorLecturas titulo="Lecturas de blogs a los que estoy suscrito" lecturas={lecturasBasicoGrande} />
            <ContenedorLecturas titulo="Lecturas recomendadas" lecturas={lecturasBasicoGrande} />
        </div>
    )
};

export default Principal;