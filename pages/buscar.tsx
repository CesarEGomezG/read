import { GetServerSideProps } from "next";
import axios from "axios";

import BarraSuperior from "../components/BarraSuperior";
import ContenedorLecturas from "../components/ContenedorLecturas";

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

const PaginaBuscar = ({ usuario }) => {
    return (
        <>
            <BarraSuperior usuario={usuario} />
            <div className="espacioBarraSuperior"></div>
            <div className="PaginaBuscar">
                <ContenedorLecturas titulo={"Resultados de la búsqueda:"} lecturas={[]} />
            </div>
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 56px;
                }
                .PaginaBuscar {
                    padding: 12px;
                }
            `}</style>
        </>
    )
}

export default PaginaBuscar;