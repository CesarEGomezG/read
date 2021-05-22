import React from "react";

const Inicio = () => {
    const texto: string = "Este es el inicio";
    return (
        <div>
            <h1>{texto}</h1>
            <p>Esto es un texto</p>
            <p>Esto es nuevo</p>
            <style jsx>{`
                body {
                    color: blue;
                }
            `}</style>
        </div>
    )
}

export default Inicio;