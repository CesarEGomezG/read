import React from "react";
import ContenedorLecturas from "../components/ContenedorLecturas";

import lecturasBasico from "../mocks/lecturasBasico";

const Principal = () => {
    return (
        <div>
            <h1>Principal</h1>
            <ContenedorLecturas titulo="Lecturas recomendadas" lecturas={lecturasBasico} />
        </div>
    )
};

export default Principal;