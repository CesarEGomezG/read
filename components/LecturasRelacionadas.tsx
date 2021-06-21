import React from "react";
import ILecturaBasico from "../interfaces/ILecturaBasico";
import Lectura from "./Lectura";

interface IPropsLecturasRelacionadas {
    lecturas: ILecturaBasico[]
}

const LecturasRelacionadas = ({ lecturas }: IPropsLecturasRelacionadas) => {
    return (
        <div className="LecturasRelacionadas">
            <ul>
                {
                    lecturas && lecturas.length > 0 && lecturas.map(lectura => {
                        return(
                            <li key={lectura.id}>
                                <Lectura lectura={lectura} />
                            </li>
                        );
                    })
                }
            </ul> 
                <style jsx>{`
                    .LecturasRelacionadas {
                        margin: 0 0px;
                    }
                    .LecturasRelacionadas h2 {
                        margin: 12px 4px 8px 4px;
                    }
                    .LecturasRelacionadas ul {
                        margin: 0;
                        padding: 0;
                        display: grid;
                        grid-template-columns: 1fr;
                        overflow: hidden;
                    }
                    .LecturasRelacionadas li {
                        list-style-type: none;
                    }
                    
                    @media only screen and (min-width: 426px) {
                        .LecturasRelacionadas ul {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 626px) {
                        .LecturasRelacionadas ul {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }
                `}</style>
        </div>
    );
};

export default LecturasRelacionadas;

