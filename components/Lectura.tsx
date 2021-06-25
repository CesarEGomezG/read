import React from "react";
import Link from "next/link";
import ILecturaBasico from "../interfaces/ILecturaBasico";

interface IPropsLectura {
    lectura: ILecturaBasico,
    pendiente?: boolean
}

const Lectura = ({ lectura, pendiente }: IPropsLectura) => {
    return (
        <div className="Lectura">
            <Link href={`/lectura/${lectura.id}`}>
                <div className="parteLectura">
                    <img src={lectura.imagen} alt="Imagen de la lectura" />
                    <div className="limitesTituloLectura">
                        <h3 className="tituloLectura">{lectura.titulo}</h3>
                    </div>
                </div>
            </Link>
            <Link href={`/blog/${lectura.idBlog}`}>
                <div className="parteBlog">
                    <img src={"https://media-exp1.licdn.com/dms/image/C4E03AQH_x3mmyCFW_w/profile-displayphoto-shrink_200_200/0/1624242119528?e=1629936000&v=beta&t=bzeOG3eJr6FHpvqivwMLQJHoX0pa1SFvAwODcw-GRwM"} alt="Imagen del blog" />
                    <p className="nombreBlog">Blog {lectura.idBlog}</p>
                </div>
            </Link>
            {
                pendiente &&
                <div className="partePendiente">
                    <input type="button" value="Eliminar" />
                </div>
            }
            <style jsx>{`
                .Lectura {
                    margin: 6px;
                    background-color: #eee;
                    padding: 0 0 6px 0;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .Lectura .parteLectura img {
                    width: 100%;
                    height: 120px;
                    object-fit: cover;
                }
                .Lectura .parteLectura .limitesTituloLectura {
                    overflow: hidden;
                    max-height: 58px;
                    margin: 4px 0 6px 4px;
                }
                .Lectura .parteLectura .limitesTituloLectura .tituloLectura {
                    font-size: 16px;
                    margin: 0;
                }
                .Lectura .parteBlog {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin-left: 4px;
                }
                .Lectura .parteBlog img {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    margin-right: 6px;
                }
                .Lectura .parteBlog .nombreBlog {
                    font-size: 16px;
                    margin: 0;
                }
                .Lectura .partePendiente {
                    display: flex;
                    justify-content: flex-end;
                    margin: 6px 6px 2px 0;
                }
            `}</style>
        </div>
    )
}

export default Lectura;