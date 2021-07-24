import { GetServerSideProps } from "next";
import axios from "axios";

import BarraSuperior from "../components/BarraSuperior";

import { primeraLetraMayuscula } from "../lib/datosPersonales";

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

const PaginaConfiguracion = ({ usuario }) => {
    return (
        <div className="PaginaConfiguracion">
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <h2>Configuración de la Cuenta</h2>
            <div className="areaFoto">
                <img src={usuario ? usuario.imagenPerfil : ""} alt="Foto de perfil del usuario" />
                <p className="textoUrlFoto">Url de la foto de perfil:</p>
                <input className="inputUrlFoto" type="text" placeholder="Inserta la url aquí..." defaultValue={usuario ? usuario.imagenPerfil : ""} />
            </div>
            <h3>Presentación</h3>
            <textarea className="inputPresentacion" placeholder="Presentación..." defaultValue={usuario ? usuario.presentacion : ""} />
            <h3>Datos personales</h3>
            <p className="descripcion">Son datos que se necesitan para el uso de la plataforma. A excepción del nombre de usuario, nombre(s) y apellido(s), ningún otro usuario podrá verlos.</p>
            <div className="areaDatos">
                <div className="dato">
                    <p className="nombreCampo">Nombre de Usuario</p>
                    <input className="inputCampo" type="text" placeholder="Nombre de usuario..." defaultValue={usuario ? usuario.nombreUsuario : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Correo Electrónico</p>
                    <input className="inputCampo" type="text" placeholder="Correo Electrónico..." defaultValue={usuario ? usuario.correo : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Número de Teléfono</p>
                    <input className="inputCampo" type="number" placeholder="Número de Teléfono..." defaultValue={usuario ? usuario.telefono : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Nombre(s)</p>
                    <input className="inputCampo" type="text" placeholder="Nombre(s)..." defaultValue={usuario ? usuario.nombreCompleto.nombres.join(" ") : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Apellido(s)</p>
                    <input className="inputCampo" type="text" placeholder="Apellido(s)..." defaultValue={usuario ? usuario.nombreCompleto.apellidos.join(" ") : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Fecha de Nacimiento</p>
                    <input className="inputCampoFecha" type="date" placeholder="Fecha de Nacimiento..." defaultValue={usuario ? usuario.fechaNacimiento : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Género</p>
                    <select className="inputCampoSeleccion" defaultValue={usuario ? primeraLetraMayuscula(usuario.genero) : ""}>
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div className="dato">
                    <p className="nombreCampo">Ciudad</p>
                    <input className="inputCampo" type="text" placeholder="Ciudad..." defaultValue={usuario ? usuario.lugar.ciudad : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Estado</p>
                    <input className="inputCampo" type="text" placeholder="Estado..." defaultValue={usuario ? usuario.lugar.estado : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Pais</p>
                    <input className="inputCampo" type="text" placeholder="Pais..." defaultValue={usuario ? usuario.lugar.pais : ""} />
                </div>
            </div>
            <div className="espacioArriba"></div>
            <h3>Contacto y Redes Sociales Vinculadas</h3>
            <p className="descripcion">Son datos públicos que todo usuario podrá ver dentro de tu perfil para poder ponerse en contacto contigo. Es opcional añadirlos.</p>
            <div className="areaDatos">
                <div className="dato">
                    <p className="nombreCampo">Sitio Web Personal</p>
                    <input className="inputCampo" type="text" placeholder="Sitio Web Personal..." defaultValue={usuario ? usuario.contacto.sitioWeb : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Correo Electrónico Público</p>
                    <input className="inputCampo" type="text" placeholder="Correo Electrónico Público..." defaultValue={usuario ? usuario.contacto.correo : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Facebook</p>
                    <input className="inputCampo" type="text" placeholder="Facebook..." defaultValue={usuario ? usuario.contacto.facebook : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Twitter</p>
                    <input className="inputCampo" type="text" placeholder="Twitter..." defaultValue={usuario ? usuario.contacto.twitter : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Instagram</p>
                    <input className="inputCampo" type="text" placeholder="Instagram..." defaultValue={usuario ? usuario.contacto.instagram : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">YouTube</p>
                    <input className="inputCampo" type="text" placeholder="YouTube..." defaultValue={usuario ? usuario.contacto.youtube : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">LinkedIn</p>
                    <input className="inputCampo" type="text" placeholder="LinkedIn..." defaultValue={usuario ? usuario.contacto.linkedIn : ""} />
                </div>
                <div className="dato">
                    <p className="nombreCampo">TikTok</p>
                    <input className="inputCampo" type="text" placeholder="TikTok..." defaultValue={usuario ? usuario.contacto.tiktok : ""} />
                </div>
            </div>
            <div className="espacioArriba"></div>
            <h3>Cambio de Contraseña</h3>
            <p className="descripcion">Puedes cambiar tu contraseña para mantener la seguridad de tu cuenta.</p>
            <div className="areaCambioContrasenia">
                <input type="password" placeholder="Contraseña actual..." />
                <input type="password" placeholder="Nueva contraseña..." />
                <input type="password" placeholder="Repetir nueva contraseña..." />
                <input type="button" value="Cambiar contraseña" />
            </div>
            <style jsx>{`
                .espacioBarraSuperior {
                    margin-bottom: 56px;
                }
                .espacioArriba {
                    margin-top: 12px;
                }
                .PaginaConfiguracion {
                    max-width: 768px;
                    margin: 0 auto;
                    padding: 12px;
                }
                .PaginaConfiguracion h2 {
                    margin: 0 0 12px 0;
                }
                .PaginaConfiguracion h3 {
                    margin: 0 0 8px 0;
                    text-align: center;
                }
                .PaginaConfiguracion p {
                    margin: 0;
                }
                .PaginaConfiguracion .descripcion {
                    text-align: center;
                    margin-bottom: 6px;
                }
                .PaginaConfiguracion .areaFoto {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid lightgray;
                    border-radius: 4px;
                    padding: 12px;
                    margin-bottom: 12px;
                }
                .PaginaConfiguracion .areaFoto img {
                    width: 96px;
                    height: 96px;
                    object-fit: cover;
                    border-radius: 50%;
                    margin-bottom: 8px;
                }
                .PaginaConfiguracion .textoUrlFoto {
                    margin-bottom: 4px;
                }
                .PaginaConfiguracion .inputUrlFoto {
                    padding: 4px 8px;
                    width: 240px;
                    margin-bottom: 2px;
                    text-align: center;
                }
                .PaginaConfiguracion .inputPresentacion {
                    font-family: Calibri;
                    display: block;
                    width: 90%;
                    height: 64px;
                    padding: 4px 8px;
                    margin: 0 auto 12px auto;
                    resize: none;
                    text-align: center;
                    font-size: 16px;
                }
                .PaginaConfiguracion .areaDatos {
                    display: grid;
                    grid-template-columns: 1fr;
                    text-align: center
                }
                .PaginaConfiguracion .areaDatos .dato {
                    margin: 4px;
                }
                .PaginaConfiguracion .areaDatos .dato .nombreCampo {
                    margin-bottom: 4px;
                }
                .PaginaConfiguracion .areaDatos .dato .inputCampo {
                    padding: 4px 8px;
                    width: 240px;
                    text-align: center;
                }
                .PaginaConfiguracion .areaDatos .dato .inputCampoFecha {
                    padding: 0 3px;
                    width: 250px;
                    height: 23px;
                    text-align: center;
                }
                .PaginaConfiguracion .areaDatos .dato .inputCampoSeleccion {
                    padding: 4px 4px;
                    width: 260px;
                }
                .PaginaConfiguracion .areaCambioContrasenia {
                    margin: 12px auto 0 auto;
                    padding: 16px;
                    width: 220px;
                    border: 1px solid lightgray;
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                }
                .PaginaConfiguracion .areaCambioContrasenia input[type="password"] {
                    padding: 4px 8px;
                    text-align: center;
                    margin-bottom: 16px;
                }
                .PaginaConfiguracion .areaCambioContrasenia input[type="button"] {
                    margin: 4px auto 0 auto;
                    padding: 4px 8px;
                    width: 160px;
                }

                @media only screen and (min-width: 526px) {
                    .PaginaConfiguracion .areaDatos {
                        grid-template-columns: 1fr 1fr;
                    }
                    .PaginaConfiguracion .areaDatos .dato .inputCampo {
                        width: 200px;
                    }
                }
                @media only screen and (min-width: 726px) {
                    .PaginaConfiguracion .areaDatos {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                    .PaginaConfiguracion .areaDatos .dato .inputCampo {
                        width: 200px;
                    }
                    .PaginaConfiguracion .areaDatos .dato .inputCampoFecha {
                        width: 210px;
                    }
                    .PaginaConfiguracion .areaDatos .dato .inputCampoSeleccion {
                        width: 220px;
                    }
                }
            `}</style>
        </div>
    )
}

export default PaginaConfiguracion;