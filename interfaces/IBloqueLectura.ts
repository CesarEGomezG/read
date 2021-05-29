interface IBloqueLectura {
    id: number,
    tipo: "parrafo" | "subtitulo" | "imagen",
    contenido: string
}

export default IBloqueLectura;