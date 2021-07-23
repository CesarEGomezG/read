import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";

import BarraSuperior from "../components/BarraSuperior";

export const getServerSideProps: GetServerSideProps = async ({}) => {
    try {
        const id = "60facb280537a78e1003336e"; // *** Corregir esto
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

const Explorar = ({ usuario }) => {
    const [temas, setTemas] = useState([
        {
            id: 0,
            nombre: "Todos"
        },
        {
            id: 1,
            nombre: "Finanzas personales"
        },
        {
            id: 2,
            nombre: "Marvel"
        },
        {
            id: 3,
            nombre: "Lifestyle y cuidado personal profesional"
        },
        {
            id: 4,
            nombre: "Todos"
        },
        {
            id: 5,
            nombre: "Finanzas personales"
        },
        {
            id: 6,
            nombre: "Marvel"
        },
        {
            id: 7,
            nombre: "Lifestyle y cuidado personal profesional"
        },
        {
            id: 8,
            nombre: "Todos"
        },
        {
            id: 9,
            nombre: "Finanzas personales"
        },
        {
            id: 10,
            nombre: "Marvel"
        },
        {
            id: 11,
            nombre: "Lifestyle y cuidado personal profesional"
        }
    ]);
    return (
        <>
            <BarraSuperior usuario={usuario} />
            <div className="Explorar">
                <div className="espacioBarraSuperior"></div>
                <div className="tipos">
                    <div className="tipo">
                        <b><p className="nombre">Todo</p></b>
                    </div>
                    <div className="tipo">
                        <p className="nombre">Lecturas</p>
                    </div>
                    <div className="tipo">
                        <p className="nombre">Tutoriales</p>
                    </div>
                    <div className="tipo">
                        <p className="nombre">Noticias</p>
                    </div>
                    <div className="tipo">
                        <p className="nombre">Opiniónes</p>
                    </div>
                    <div className="tipo">
                        <p className="nombre">Anécdotas</p>
                    </div>
                </div>
                <div className="temas">
                    {
                        temas.map(tema =>
                            <div className="tema" key={tema.id}>
                                <p className="nombre">{tema.nombre}</p>
                            </div>
                        )
                    }
                </div>
                <style jsx>{`
                    .espacioBarraSuperior {
                        margin-bottom: 56px;
                    }
                    .Explorar {
                        padding: 12px;
                    }
                    .Explorar .tipos {
                        max-width: 768px;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        margin: 0 auto 10px auto;
                    }
                    .Explorar .tipos .tipo {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 6px 4px;
                        border: 1px solid black;
                        padding: 4px 8px;
                        border-radius: 4px;
                        background-color: #eee;
                    }
                    .Explorar .tipos .tipo .nombre {
                        margin: 0;
                    }
                    .Explorar .temas {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                    .Explorar .temas .tema {
                        text-align: center;
                        padding: 4px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid black;
                        margin: 6px;
                        border-radius: 2px;
                        background-color: #eee;
                    }

                    @media only screen and (min-width: 426px) {
                        .Explorar .tipos {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                        .Explorar .temas {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 526px) {
                        .Explorar .tipos {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 626px) {
                        .Explorar .tipos {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                        }
                        .Explorar .temas {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 826px) {
                        .Explorar .temas {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        }
                    }
                    @media only screen and (min-width: 926px) {
                        .Explorar .temas {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
                        }
                    }
                    @media only screen and (min-width: 1126px) {
                        .Explorar .temas {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
                        }
                    }
                    @media only screen and (min-width: 1326px) {
                        .Explorar .temas {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

export default Explorar;