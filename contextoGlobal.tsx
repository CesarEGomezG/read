import React, { createContext, useContext } from "react";

interface IEstadoGlobal {
    tokenUsuario: string,
    usuario: {
        _id: string,
        nombreUsuario: string,
        nombreCompleto: {
            nombres: string[],
            apellidos: string[]
        },
        correo: string,
        telefono: number,
        imagenPerfil: string,
        fechaNacimiento: string,
        genero: "masculino" | "femenino" | "otro",
        lugar: {
            ciudad: string,
            estado: string,
            pais: string
        },
        contacto: {
            sitioWeb: string,
            correo: string,
            facebook: string,
            twitter: string,
            instagram: string,
            youtube: string,
            tiktok: string,
            linkedIn: string
        },
        presentacion: string,
        intereses: string[],
        blogs: string[],
        blogsSeguidos: string[],
        colecciones: string[],
        leerDespues: string[]
    }
}

const estadoInicial: IEstadoGlobal = {
    tokenUsuario: "",
    usuario: {
        _id: null,
        nombreUsuario: null,
        nombreCompleto: {
            nombres: [],
            apellidos: []
        },
        correo: null,
        telefono: null,
        imagenPerfil: null,
        fechaNacimiento: null,
        genero: null,
        lugar: {
            ciudad: null,
            estado: null,
            pais: null
        },
        contacto: {
            sitioWeb: null,
            correo: null,
            facebook: null,
            twitter: null,
            instagram: null,
            youtube: null,
            tiktok: null,
            linkedIn: null
        },
        presentacion: null,
        intereses: [],
        blogs: [],
        blogsSeguidos: [],
        colecciones: [],
        leerDespues: []
    }
};

const estadoEjemplo: IEstadoGlobal = {
    tokenUsuario: "",
    usuario: {
        _id: "a1b2c3",
        nombreUsuario: "AlexRodriguezG",
        nombreCompleto: {
            nombres: ["Alex"],
            apellidos: ["Rodriguez", "García"]
        },
        correo: "elcorreo@correo.com",
        telefono: 8180640305,
        imagenPerfil: "https://thispersondoesnotexist.com/image",
        fechaNacimiento: "1993-07-23",
        genero: "masculino",
        lugar: {
            ciudad: "Palo Alto",
            estado: "California",
            pais: "Estados Unidos"
        },
        contacto: {
            sitioWeb: "https://platzi.com/",
            correo: "team@platzi.com",
            facebook: "https://www.facebook.com/platzi",
            twitter: "https://twitter.com/platzi?lang=es",
            instagram: "https://www.instagram.com/platzi/",
            youtube: "https://www.youtube.com/user/mejorandolaweb",
            tiktok: "https://www.tiktok.com/@aprendeconplatzi?lang=es",
            linkedIn: "https://www.linkedin.com/school/platzi-inc/"
        },
        presentacion: "Me llamo Sam, estudié la carrera de Adminsitración de Empresas, y me dedico a la escritura de articulos sobre Negocios y Crecimiento Profesional.",
        intereses: [],
        blogs: [],
        blogsSeguidos: [],
        colecciones: [],
        leerDespues: []
    }
};

const reducerEstadoGlobal = (estado: IEstadoGlobal, accion: { tipo: string, contenido?: any }): IEstadoGlobal => {
    switch(accion.tipo) {
        case "INICIAR_SESION":
            return {
                ...estado,
                tokenUsuario: accion.contenido.tokenUsuario,
                usuario: {
                    ...estado.usuario,
                    _id: accion.contenido.usuario._id,
                    nombreUsuario: accion.contenido.usuario.nombreUsuario,
                    nombreCompleto: {
                        ...estado.usuario.nombreCompleto,
                        nombres: accion.contenido.usuario.nombreCompleto.nombres,
                        apellidos: accion.contenido.usuario.nombreCompleto.apellidos
                    },
                    correo: accion.contenido.usuario.correo,
                    telefono: accion.contenido.usuario.telefono,
                    imagenPerfil: accion.contenido.usuario.imagenPerfil,
                    fechaNacimiento: accion.contenido.usuario.fechaNacimiento,
                    genero: accion.contenido.usuario.genero,
                    lugar: {
                        ...estado.usuario.lugar,
                        ciudad: accion.contenido.usuario.lugar.ciudad,
                        estado: accion.contenido.usuario.lugar.estado,
                        pais: accion.contenido.usuario.lugar.pais
                    },
                    contacto: {
                        ...estado.usuario.contacto,
                        sitioWeb: accion.contenido.usuario.contacto.sitioWeb,
                        correo: accion.contenido.usuario.contacto.correo,
                        facebook: accion.contenido.usuario.contacto.facebook,
                        twitter: accion.contenido.usuario.contacto.twitter,
                        instagram: accion.contenido.usuario.contacto.instagram,
                        youtube: accion.contenido.usuario.contacto.youtube,
                        tiktok: accion.contenido.usuario.contacto.tiktok,
                        linkedIn: accion.contenido.usuario.contacto.linkedIn,
                    },
                    presentacion: accion.contenido.usuario.presentacion,
                    intereses: accion.contenido.usuario.intereses,
                    blogs: accion.contenido.usuario.blogs,
                    blogsSeguidos: accion.contenido.usuario.blogsSeguidos,
                    colecciones: accion.contenido.usuario.colecciones,
                    leerDespues: accion.contenido.usuario.leerDespues
                }
            };
        case "CERRAR_SESION":
            return {
                ...estadoInicial
            };
        case "PRUEBA":
            return {
                ...estado,
                tokenUsuario: "estoEsPrueba"
            };
        default:
            return estado;
    }
};

const ContextoGlobal = createContext(null);
ContextoGlobal.displayName = "ContextoGlobal";

export const useContextoGlobal = () => useContext(ContextoGlobal);

export const ProveedorContextoGlobal = ({ children }) => {
    const texto = "Hola mundo!";
    return (
        <ContextoGlobal.Provider value={{ texto }}>
            { children }
        </ContextoGlobal.Provider>
    );
};