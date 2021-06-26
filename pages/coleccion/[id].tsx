import React from "react";
import Link from "next/link";

import BarraSuperior from "../../components/BarraSuperior";
import ContenedorLecturas from "../../components/ContenedorLecturas";

import mockLecturasBasico from "../../mocks/lecturasBasico";

const PaginaColeccion = () => {
    return (
        <div className="PaginaColeccion">
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <h2>Nombre de la colección</h2>
            <Link href="/usuario/0">
                <div className="datosUsuario">
                    <img className="fotoUsuario" src={"https://media-exp1.licdn.com/dms/image/C4E03AQH_x3mmyCFW_w/profile-displayphoto-shrink_200_200/0/1624242119528?e=1629936000&v=beta&t=bzeOG3eJr6FHpvqivwMLQJHoX0pa1SFvAwODcw-GRwM"} alt="Foto de perfil del usuario" />
                    <div className="nombresUsuario">
                        <p className="nombreUsuario">CesarGomezG</p>
                        <p className="nombreCompleto">Cesar Eliezer Gomez Gutierrez</p>
                    </div>
                </div>
            </Link>
            <ContenedorLecturas lecturas={mockLecturasBasico} ocultarBlogs />
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 56px;
                }
                .PaginaColeccion {
                    padding: 12px;
                }
                .PaginaColeccion h2 {
                    margin: 0 0 10px 6px;
                }
                .PaginaColeccion p {
                    margin: 0;
                }
                .PaginaColeccion .datosUsuario {
                    display: flex;
                    overflow: hidden;
                    margin: 0 0 10px 6px;
                }
                .PaginaColeccion .datosUsuario .fotoUsuario {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
                .PaginaColeccion .datosUsuario .nombresUsuario {
                    margin: 0 8px;
                }
                .PaginaColeccion .datosUsuario .nombresUsuario .nombreUsuario {
                    font-weight: bold;
                    font-size: 1.25em;
                }
            `}</style>
        </div>
    )
}

export default PaginaColeccion;