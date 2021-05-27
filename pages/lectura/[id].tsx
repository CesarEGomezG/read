import React from "react";
import { useRouter } from "next/router";

// ! Esta pagina se llama igual que el componente Lectura
const Lectura = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Lectura con id {router.query.id}</h1>
        </div>
    );
};

export default Lectura;