import React from "react";
import ContenedorLecturas from "../components/ContenedorLecturas";
import BarraSuperior from "../components/BarraSuperior";

import lecturasBasico from "../mocks/lecturasBasico";

const Principal = () => {
    return (
        <div>
            <BarraSuperior />
            <h1>Principal</h1>
            <ContenedorLecturas titulo="Cocina" lecturas={lecturasBasico} />
        </div>
    )
};

export default Principal;