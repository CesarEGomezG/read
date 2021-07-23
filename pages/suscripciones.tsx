import { GetServerSideProps } from "next";
import axios from "axios";

import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

import mockLecturasBasico from "../mocks/lecturasBasico";

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

const PaginaSuscripciones = ({ usuario }) => {
    return (
        <div className="PaginaSuscripciones">
            <BarraSuperior usuario={usuario} />
            <div className="espacioBarraSuperior"></div>
            <ContenedorLecturas titulo={"Lecturas recientes de los blogs a los que estoy suscrito"} lecturas={mockLecturasBasico} />
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 56px;
                }
                .PaginaSuscripciones {
                    padding: 12px;
                }
            `}</style>
        </div>
    )
}

export default PaginaSuscripciones;