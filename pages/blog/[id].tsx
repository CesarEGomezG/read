import React from "react";
import Link from "next/link";

import BarraSuperior from "../../components/BarraSuperior";
import ContenedorLecturas from "../../components/ContenedorLecturas";
import ContenedorColecciones from "../../components/ContenedorColecciones";

import mockLecturasBasico from "../../mocks/lecturasBasico";

const PaginaBlog = () => {
    return (
        <>
            <BarraSuperior />
            <div className="PaginaBlog">
                <div className="espacioBarraSuperior"></div>
                <div className="contenedorPortada">
                    <img className="imagenPortada" src={"https://centrourbano.com/revista/wp-content/uploads/Oficinas-Mty.jpg"} alt="Imagen de portada" />
                </div>
                <div className="datosBlog">
                    <img className="fotoBlog" src={"https://media-exp1.licdn.com/dms/image/C4E03AQH_x3mmyCFW_w/profile-displayphoto-shrink_200_200/0/1624242119528?e=1629936000&v=beta&t=bzeOG3eJr6FHpvqivwMLQJHoX0pa1SFvAwODcw-GRwM"} alt="Foto de perfil del Blog" />
                    <div className="nombresBlog">
                        <p className="nombreBlog">CesarGomezG</p>
                        <p className="nombreCompleto">Cesar Eliezer Gomez Gutierrez</p>
                    </div>
                </div>
                <p className="presentacion">
                    Hola, me llamo Cesar. Soy estudiante de la carrera de Ingeniería en Software. Me gusta mucho la programación y los negocios, asi que dedico mis tiempos libres para escribir sobre ambos temas.
                </p>
                <div className="contacto">
                    <Link href="/">
                        <div className="redSocial">
                            <p>Facebook</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>Instagram</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>YouTube</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>WhatsApp</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>LinkedIn</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>TikTok</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>Sitio Web</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>Correo</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="redSocial">
                            <p>Telefono</p>
                        </div>
                    </Link>
                </div>
                <ContenedorLecturas titulo={"Lecturas recientes"} lecturas={mockLecturasBasico} ocultarBlogs />
                <h2>Secciones</h2>
                <ContenedorColecciones colecciones={[ {id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6} ]} />
                <style jsx>{`
                    .espacioBarraSuperior {
                        margin-bottom: 56px;
                    }
                    .PaginaBlog {
                        padding: 16px 12px;
                        margin: 0 auto;
                    }
                    .PaginaBlog p {
                        margin: 0;
                    }
                    .PaginaBlog h2 {
                        margin: 6px;
                    }
                    .PaginaBlog .contenedorPortada {
                        width: 100%;
                        padding-top: 40%;
                        position: relative;
                        margin-bottom: 16px;
                        border-radius: 4px;
                        overflow: hidden;
                    }
                    .PaginaBlog .contenedorPortada .imagenPortada {
                        position: absolute;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .PaginaBlog .datosBlog {
                        display: flex;
                        overflow: hidden;
                        margin-left: 4px;
                    }
                    .PaginaBlog .datosBlog .fotoBlog {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                    }
                    .PaginaBlog .datosBlog .nombresBlog {
                        margin: 0 8px;
                    }
                    .PaginaBlog .datosBlog .nombresBlog .nombreBlog {
                        font-weight: bold;
                        font-size: 1.25em;
                    }
                    .PaginaBlog .presentacion {
                        margin: 12px 0 12px 4px;
                    }
                    .PaginaBlog .contacto {
                        display: flex;
                        flex-wrap: wrap;
                        margin-left: 4px;
                    }
                    .PaginaBlog .contacto .redSocial {
                        border: 1px solid black;
                        border-radius: 2px;
                        margin: 0 8px 8px 0;
                        padding: 2px 4px;
                    }

                    @media only screen and (min-width: 426px) {
                        .PaginaBlog .contenedorPortada {
                            padding-top: 30%;
                        }
                    }
                    @media only screen and (min-width: 769px) {
                        .PaginaBlog .contenedorPortada {
                            padding-top: 20%;
                        }
                    }
                `}</style>
            </div>
        </>
    )
};

export default PaginaBlog;