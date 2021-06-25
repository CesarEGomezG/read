import React from "react";

import BarraSuperior from "../components/BarraSuperior";

const PaginaConfiguracion = () => {
    return (
        <div className="PaginaConfiguracion">
            <BarraSuperior />
            <div className="espacioBarraSuperior"></div>
            <h2>Configuración de la Cuenta</h2>
            <div className="areaFoto">
                <img src={"https://media-exp1.licdn.com/dms/image/C4E03AQH_x3mmyCFW_w/profile-displayphoto-shrink_200_200/0/1624242119528?e=1629936000&v=beta&t=bzeOG3eJr6FHpvqivwMLQJHoX0pa1SFvAwODcw-GRwM"} alt="Foto de perfil del usuario" />
                <p className="textoUrlFoto">Url de la foto de perfil:</p>
                <input className="inputUrlFoto" type="text" placeholder="Inserta la url aquí..." />
            </div>
            <h3>Presentación</h3>
            <textarea className="inputPresentacion" placeholder="Presentación..." />
            <h3>Datos personales</h3>
            <p className="descripcion">Son datos que se necesitan para el uso de la plataforma. A excepción del nombre de usuario, nombre(s) y apellido(s), ningún otro usuario podrá verlos.</p>
            <div className="areaDatos">
                <div className="dato">
                    <p className="nombreCampo">Nombre de Usuario</p>
                    <input className="inputCampo" type="text" placeholder="Nombre de usuario..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Correo Electrónico</p>
                    <input className="inputCampo" type="text" placeholder="Correo Electrónico..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Número de Teléfono</p>
                    <input className="inputCampo" type="number" placeholder="Número de Teléfono..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Nombre(s)</p>
                    <input className="inputCampo" type="text" placeholder="Nombre(s)..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Apellido(s)</p>
                    <input className="inputCampo" type="text" placeholder="Apellido(s)..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Fecha de Nacimiento</p>
                    <input className="inputCampoFecha" type="date" placeholder="Fecha de Nacimiento..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Sexo</p>
                    <select className="inputCampoSeleccion">
                        <option>(Sin seleccionar)</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div className="dato">
                    <p className="nombreCampo">Lugar</p>
                    <input className="inputCampo" type="text" placeholder="Lugar..." />
                </div>
            </div>
            <div className="espacioArriba"></div>
            <h3>Contacto y Redes Sociales Vinculadas</h3>
            <p className="descripcion">Son datos públicos que todo usuario podrá ver dentro de tu perfil para poder ponerse en contacto contigo. Es opcional añadirlos.</p>
            <div className="areaDatos">
                <div className="dato">
                    <p className="nombreCampo">Sitio Web Personal</p>
                    <input className="inputCampo" type="text" placeholder="Sitio Web Personal..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Correo Electrónico Público</p>
                    <input className="inputCampo" type="text" placeholder="Correo Electrónico Público..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Facebook</p>
                    <input className="inputCampo" type="number" placeholder="Facebook..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Twitter</p>
                    <input className="inputCampo" type="text" placeholder="Twitter..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">Instagram</p>
                    <input className="inputCampo" type="text" placeholder="Instagram..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">YouTube</p>
                    <input className="inputCampo" type="text" placeholder="YouTube..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">LinkedIn</p>
                    <input className="inputCampo" type="text" placeholder="LinkedIn..." />
                </div>
                <div className="dato">
                    <p className="nombreCampo">TikTok</p>
                    <input className="inputCampo" type="text" placeholder="TikTok..." />
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