export const nombreCompletoATexto = (arregloNombres: string[], arregloApellidos: string[]): string => {
    const arregloNombresApellidos: string[] = arregloNombres.concat(arregloApellidos);
    return arregloNombresApellidos.join(" ");
}

export const primeraLetraMayuscula = (texto: string): string => {
    if(texto.length > 0) {
        const arregloCaracteres: string[] = texto.split("");
        arregloCaracteres[0] = arregloCaracteres[0].toUpperCase();
        const nuevoTexto: string = arregloCaracteres.join("");
        return nuevoTexto;
    } else return "";
}