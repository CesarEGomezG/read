import React from "react";

const Hola = () => {
    const texto: string = "Hola!";
    return (
        <div>
            <h1>{texto}</h1>
            <style jsx>{
            `h1 {
                color: red;
            }`
            }</style>
        </div>
        
    )
}

export default Hola;