import { GetServerSideProps } from "next";
import axios from "axios";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import BarraSuperior from "../../components/BarraSuperior";
import LecturasRelacionadas from "../../components/LecturasRelacionadas";

import ILecturaCompleto from "../../interfaces/ILecturaCompleto";

import mockLecturasCompleto from "../../mocks/lecturasCompleto";
import mockLecturasBasico from "../../mocks/lecturasBasico";
import mockComentarios from "../../mocks/comentarios";

export const getServerSideProps: GetServerSideProps = async ({}) => {
    try {
        const id = "60facb280537a78e1003336e"; // *** Corregir esto
        const { data: { datos: { usuario } } } = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/${id}`);
        return {
            props: {
                usuario
            }
        };
    } catch(error) {
        return {
            props: {
                usuario: null
            }
        }
    }
}

const PaginaLectura = ({ usuario }) => {
    const router = useRouter();
    const [lectura, setLectura] = useState<ILecturaCompleto>(null);
    const [comentarios, setComentarios] = useState<any>(mockComentarios); // Corregir any y [1,2,3]
    useEffect(() => {
        if(router.query.id && typeof router.query.id === "string") {
            const idLectura = parseInt(router.query.id);
            setLectura(mockLecturasCompleto.find(lectura => lectura.id === idLectura));
        };
    }, [router.query.id]);
    return (
        <>
            <BarraSuperior />
            <div className="PaginaLectura">
                <div className="espacioBarraSuperior"></div>
                <div className="contenedorPortada">
                    <img className="imagenPortada" src={lectura ? lectura.imagen : ""} alt="Imagen de portada" />
                </div>
                <h1>{lectura ? lectura.titulo : ""}</h1>
                <div className="datos">
                    <Link href={`/blog/${lectura && lectura.idBlog || 0}`}>
                        <div className="blog">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg" alt="Foto del blog" />
                            <p>{lectura ? `Blog del id ${lectura.idBlog}` : ""}</p>
                        </div>
                    </Link>
                    <input className="suscribir" type="button" value="Suscribir" />
                    <span>23 de noviembre de 2021 a las 23:59</span>
                    <span className="calificacion">94/100</span>
                </div>
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
                <h2>Sección de comentarios</h2>
                <ul>
                    {comentarios ? comentarios.map(comentario => {
                        return (
                            <li className="comentario" key={comentario.id}>
                                <Link href={`/usuario/${0}`}>
                                    <div className="usuario">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg" alt="Foto del usuario" />
                                        <p>{`Usuario del id ${comentario.idUsuario}`}</p>
                                    </div>
                                </Link>
                                <p className="texto">{comentario.mensaje}</p>
                            </li>
                        )
                    }) : <p>No hay comentarios</p>}
                </ul>
                <h2>Lecturas relacionadas</h2>
                <LecturasRelacionadas lecturas={mockLecturasBasico} />
                <style jsx>{`
                    .espacioBarraSuperior {
                        margin-bottom: 56px;
                    }
                    .PaginaLectura {
                        max-width: 768px;
                        margin: 0 auto;
                        font-size: 16px;
                    }
                    .PaginaLectura p {
                        margin: 0;
                        line-height: 1.4em;
                    }
                    .PaginaLectura .contenedorPortada {
                        width: 100%;
                        padding-top: 50%;
                        position: relative;
                    }
                    .PaginaLectura .contenedorPortada .imagenPortada {
                        position: absolute;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .PaginaLectura .datos {
                        padding: 0 8px;
                        display: grid;
                        grid-template-columns: 4fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        margin-bottom: 16px;
                    }
                    .PaginaLectura .datos * {
                        display: flex;
                        align-items: center;
                    }
                    .PaginaLectura .suscribir {
                        width: 68px;
                        border-radius: 4px;
                        justify-self: flex-end;
                        margin-right: 4px;
                    }
                    .PaginaLectura .calificacion {
                        justify-self: flex-end;
                        margin-right: 4px;
                    }
                    .PaginaLectura .datos .blog img {
                        width: 28px;
                        height: 28px;
                        object-fit: contain;
                        border-radius: 50%;
                    }
                    .PaginaLectura .datos .blog p {
                        display: inline-block;
                        margin-left: 8px;
                        font-weight: bold;
                        font-size: 1em;
                    }
                    .PaginaLectura h1 {
                        padding: 0 8px;
                        margin: 12px 0;
                        font-size: 1.5em;
                    }
                    .PaginaLectura h2 {
                        margin: 16px 0 8px 0;
                        padding: 0 8px;
                        font-size: 1.25em;
                    }
                    .PaginaLectura ul {
                        margin: 0;
                        padding: 0 8px;
                    }
                    .PaginaLectura li {
                        list-style-type: none;
                        margin-bottom: 12px;
                    }
                    .PaginaLectura .comentario {
                        border: 1px solid black;
                        border-radius: 4px;
                        padding: 8px;
                    }
                    .PaginaLectura .comentario .usuario {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin-bottom: 4px;
                    }
                    .PaginaLectura .comentario .usuario img {
                        width: 28px;
                        height: 28px;
                        object-fit: contain;
                        border-radius: 50%;
                    }
                    .PaginaLectura .comentario .usuario p {
                        display: inline-block;
                        margin-left: 8px;
                        font-weight: bold;
                        font-size: 1em;
                    }
                    @media only screen and (min-width: 376px) {
                        .PaginaLectura {
                            font-size: 17px;
                        }
                    }
                    @media only screen and (min-width: 769px) {
                        .PaginaLectura {
                            font-size: 18px;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default PaginaLectura;