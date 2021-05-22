import React, { useEffect, useState } from "react";
import Axios from "axios";

const Inicio = () => {
    const texto: string = "Este es el inicio";
    const [datos, setDatos] = useState(null);
    useEffect(() => {
        Axios.post("https://read-eight.vercel.app/api/prueba", {})
            .then(respuesta => setDatos(respuesta.data.method));
    }, []);
    return (
        <div className="Inicio">
            <h1>{texto}</h1>
            <p>Esto es un texto</p>
            <p>{datos}</p>
            <style jsx>{`
                .Inicio {
                    color: blue;
                }
            `}</style>
        </div>
    )
}

export default Inicio;