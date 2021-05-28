import React from "react";
import ContenedorLecturas from "../components/ContenedorLecturas";

import lecturasBasico from "../mocks/lecturasBasico";

const Principal = () => {
    return (
        <div>
            <ContenedorLecturas titulo="Lecturas de blogs a los que estoy suscrito" lecturas={lecturasBasico} />
            <ContenedorLecturas titulo="Lecturas recomendadas" lecturas={lecturasBasico} />
        </div>
    )
};

export default Principal;