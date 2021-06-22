import React from "react";
import Link from "next/link";

const Coleccion = () => {
    return (
        <div className="Coleccion">
            <Link href={`/coleccion/${"0"}`}>
                <div>
                    <img src={"https://i.ytimg.com/vi/k6wUo16cqlQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIrYXUifdw1KUhlrvIoQ6n1SVUbQ"} alt="Imagen de la lectura" />
                    <div className="limitesTituloColeccion">
                        <h3 className="tituloColeccion">{"Colección de lecturas que me parecieron muy interesantes y segun yo también te pueden interesar a ti y pues no tengo nada mas que escribir"}</h3>
                    </div>
                </div>
            </Link>
            <style jsx>{`
                .Coleccion {
                    display: inline-block;
                    margin: 6px;
                    background-color: #eee;
                    padding: 0 0 6px 0;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .Coleccion img {
                    width: 100%;
                    height: 120px;
                    object-fit: cover;
                }
                .Coleccion .limitesTituloColeccion {
                    overflow: hidden;
                    max-height: 58px;
                    margin: 4px 0 6px 4px;
                }
                .Coleccion .limitesTituloColeccion .tituloColeccion {
                    font-size: 16px;
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default Coleccion;