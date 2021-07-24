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

const PaginaLeerDespues = ({ usuario }) => {
    return (
        <div className="PaginaLeerDespues">
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <ContenedorLecturas titulo={"Lecturas pendientes por leer"} lecturas={mockLecturasBasico} pendientes={true} />
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 56px;
                }
                .PaginaLeerDespues {
                    padding: 12px;
                }
            `}</style>
        </div>
    )
}

export default PaginaLeerDespues;