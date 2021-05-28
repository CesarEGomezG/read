import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import lecturasBasico from "../../mocks/lecturasBasico";

const PaginaLectura = () => {
    const router = useRouter();
    const [imagen, setImagen] = useState<string>("");
    useEffect(() => {
        if(router.query.id && typeof router.query.id === "string") {
            const idLectura = parseInt(router.query.id);
            setImagen(lecturasBasico.find(lectura => lectura.idLectura === idLectura).imagen);
        };
    }, [router.query.id]);
    return (
        <div className="PaginaLectura">
            <img className="imagenPortada" src={imagen} alt="Imagen de portada" />
            <style jsx>{`
                .PaginaLectura .imagenPortada {
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
                }
            `}</style>
        </div>
    );
};

export default PaginaLectura;