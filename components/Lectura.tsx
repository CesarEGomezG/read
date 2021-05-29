import React from "react";
import Link from "next/link";
import ILecturaBasico from "../interfaces/ILecturaBasico";

interface IPropsLectura {
    lectura: ILecturaBasico
}

const Lectura = ({ lectura }: IPropsLectura) => {
    return (
        <div className="Lectura">
            <Link href={`/lectura/${lectura.id}`}>
                <div className="parteLectura">
                    <img src={lectura.imagen} alt="Imagen de la lectura" />
                    <h3 className="tituloLectura">{lectura.titulo}</h3>
                </div>
            </Link>
            <Link href={`/blog/${lectura.idBlog}`}>
                <div className="parteBlog">
                    <p className="nombreBlog">Blog {lectura.idBlog}</p>
                </div>
            </Link>
            <style jsx>{`
                .Lectura {
                    margin-bottom: 16px;
                    background-color: #eee;
                }
                .Lectura .parteLectura img {
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
                }
                .Lectura .parteLectura .tituloLectura {
                    margin: 4px 0 8px 0;
                }
                .Lectura .parteBlog .nombreBlog {
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default Lectura;