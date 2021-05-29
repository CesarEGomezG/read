import ILecturaBasico from "./ILecturaBasico";
import IBloqueLectura from "./IBloqueLectura";

interface ILecturaCompleto extends ILecturaBasico {
    bloques: IBloqueLectura[]
}

export default ILecturaCompleto;