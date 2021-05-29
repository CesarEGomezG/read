import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ILecturaCompleto from "../../interfaces/ILecturaCompleto";

import lecturasCompleto from "../../mocks/lecturasCompleto";

const PaginaLectura = () => {
    const router = useRouter();
    const [lectura, setLectura] = useState<ILecturaCompleto>(null);
    useEffect(() => {
        if(router.query.id && typeof router.query.id === "string") {
            const idLectura = parseInt(router.query.id);
            setLectura(lecturasCompleto.find(lectura => lectura.id === idLectura));
        };
    }, [router.query.id]);
    return (
        <div className="PaginaLectura">
            <img className="imagenPortada" src={lectura ? lectura.imagen : ""} alt="Imagen de portada" />
            <h1>{lectura ? lectura.titulo : ""}</h1>
            <h2>{lectura ? `Blog del id ${lectura.idBlog}` : ""}</h2>
            <ul>
                {lectura ? lectura.bloques.map(bloque => {
                    if(bloque.tipo === "subtitulo") {
                        return (
                            <li key={bloque.id}>
                                <h2>{bloque.contenido}</h2>
                            </li>
                        )
                    } else if(bloque.tipo === "parrafo") {
                        return (
                            <li key={bloque.id}>
                                <p>{bloque.contenido}</p>
                            </li>
                        );
                    } else if(bloque.tipo === "imagen") {
                        return (
                            <li key={bloque.id}>
                                <img src={bloque.contenido} alt="Imagen" />
                            </li>
                        );
                    }
                }) : ""}
            </ul>
            <style jsx>{`
                .PaginaLectura .imagenPortada {
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
                }
                .PaginaLectura h1 {
                    margin: 8px 0;
                    font-size: 24px;
                }
                .PaginaLectura h2 {
                    margin: 4px 0 24px 0;
                    font-size: 16px;
                }
                .PaginaLectura ul {
                    margin: 0;
                    padding: 0;
                }
                .PaginaLectura li {
                    list-style-type: none;
                    margin-bottom: 12px;
                }
                .PaginaLectura p {
                    font-size: 16px;
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default PaginaLectura;