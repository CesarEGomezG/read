import { GetServerSideProps } from "next";
import Link from "next/link";
import axios from "axios";

import BarraSuperior from "../../components/BarraSuperior";
import ContenedorColecciones from "../../components/ContenedorColecciones";

import { nombreCompletoATexto } from "../../lib/datosPersonales";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const { id } = params;
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

const PaginaUsuario = ({ usuario }) => {
    return (
        <>
            <BarraSuperior />
            <div className="PaginaUsuario">
                <div className="espacioBarraSuperior"></div>
                <div className="datosUsuario">
                    <img className="fotoUsuario" src={usuario ? usuario.imagenPerfil : ""} alt="Foto de perfil del usuario" />
                    <div className="nombresUsuario">
                        <p className="nombreUsuario">{usuario ? usuario.nombreUsuario : ""}</p>
                        <p className="nombreCompleto">{usuario ? nombreCompletoATexto(usuario.nombreCompleto.nombres, usuario.nombreCompleto.apellidos) : ""}</p>
                    </div>
                </div>
                <p className="presentacion">{usuario ? usuario.presentacion : ""}</p>
                <div className="contacto">
                    <Link href={usuario && usuario.contacto.facebook ? usuario.contacto.facebook : ""}>
                        <div className="redSocial">
                            <p>Facebook</p>
                        </div>
                    </Link>
                    <Link href={usuario && usuario.contacto.instagram ? usuario.contacto.instagram : ""}>
                        <div className="redSocial">
                            <p>Instagram</p>
                        </div>
                    </Link>
                    <Link href={usuario && usuario.contacto.youtube ? usuario.contacto.youtube : ""}>
                        <div className="redSocial">
                            <p>YouTube</p>
                        </div>
                    </Link>
                    <Link href={usuario && usuario.contacto.linkedIn ? usuario.contacto.linkedIn : ""}>
                        <div className="redSocial">
                            <p>LinkedIn</p>
                        </div>
                    </Link>
                    <Link href={usuario && usuario.contacto.tiktok ? usuario.contacto.tiktok : ""}>
                        <div className="redSocial">
                            <p>TikTok</p>
                        </div>
                    </Link>
                    <Link href={usuario && usuario.contacto.sitioWeb ? usuario.contacto.sitioWeb : ""}>
                        <div className="redSocial">
                            <p>Sitio Web</p>
                        </div>
                    </Link>
                    <Link href={usuario && usuario.contacto.correo ? usuario.contacto.correo : ""}>
                        <div className="redSocial">
                            <p>Correo</p>
                        </div>
                    </Link>
                    <Link href={usuario && usuario.contacto.twitter ? usuario.contacto.twitter : ""}>
                        <div className="redSocial">
                            <p>Twitter</p>
                        </div>
                    </Link>
                </div>
                <p className="titulo">Blogs</p>
                <div className="blogs">
                    {
                        [0, 1, 2, 3, 4, 5, 6].map(blog => {
                            return (
                                <div className="blog" key={blog}>
                                    <Link href="/">
                                        <img src={"https://media-exp1.licdn.com/dms/image/C4E03AQH_x3mmyCFW_w/profile-displayphoto-shrink_200_200/0/1624242119528?e=1629936000&v=beta&t=bzeOG3eJr6FHpvqivwMLQJHoX0pa1SFvAwODcw-GRwM"} alt="Imagen de blog" />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <p className="titulo">Colecciones</p>
                <ContenedorColecciones colecciones={[ {id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6} ]} />
                <style jsx>{`
                    .espacioBarraSuperior {
                        margin-bottom: 56px;
                    }
                    .PaginaUsuario {
                        padding: 16px 12px;
                        margin: 0 auto;
                    }
                    .PaginaUsuario p {
                        margin: 0;
                    }
                    .PaginaUsuario .datosUsuario {
                        display: flex;
                        overflow: hidden;
                        margin-left: 4px;
                    }
                    .PaginaUsuario .datosUsuario .fotoUsuario {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    .PaginaUsuario .datosUsuario .nombresUsuario {
                        margin: 0 8px;
                    }
                    .PaginaUsuario .datosUsuario .nombresUsuario .nombreUsuario {
                        font-weight: bold;
                        font-size: 1.25em;
                    }
                    .PaginaUsuario .presentacion {
                        margin: 12px 0 12px 4px;
                    }
                    .PaginaUsuario .contacto {
                        display: flex;
                        flex-wrap: wrap;
                        margin-left: 4px;
                    }
                    .PaginaUsuario .contacto .redSocial {
                        border: 1px solid black;
                        border-radius: 2px;
                        margin: 0 8px 8px 0;
                        padding: 2px 4px;
                    }
                    .PaginaUsuario .titulo {
                        font-size: 1.25em;
                        margin: 0 0 8px 4px;
                    }
                    .PaginaUsuario .blogs {
                        display: flex;
                        flex-wrap: wrap;
                        margin-left: 4px;
                    }
                    .PaginaUsuario .blogs .blog {
                        margin: 0 8px 6px 0;
                    }
                    .PaginaUsuario .blogs .blog img {
                        width: 54px;
                        height: 54px;
                        border-radius: 50%;
                    }
                `}</style>
            </div>
        </>
    )
};

export default PaginaUsuario;