import { MongoClient, ObjectId } from "mongodb";
import config from "../config";

class LibMongo {
    cliente = null
    nombreBD = null
    static conexion = null

    constructor(nombreBaseDatos?: string, contraseniaMongo?: string) {
        if(nombreBaseDatos && contraseniaMongo) {
            contraseniaMongo = encodeURIComponent(contraseniaMongo);
            const urlConexion = `mongodb+srv://db_user_general:${contraseniaMongo}@helloworld.56p3x.mongodb.net/${nombreBaseDatos}?retryWrites=true&w=majority`;
            this.cliente = new MongoClient(urlConexion, { useNewUrlParser: true, useUnifiedTopology: true });
            this.nombreBD = nombreBaseDatos;
        } else {
            nombreBaseDatos = config.nombreBaseDatos;
            contraseniaMongo = encodeURIComponent(config.contraseniaMongo);
            const urlConexion = `mongodb+srv://db_user_general:${contraseniaMongo}@helloworld.56p3x.mongodb.net/${nombreBaseDatos}?retryWrites=true&w=majority`;
            this.cliente = new MongoClient(urlConexion, { useNewUrlParser: true, useUnifiedTopology: true });
            this.nombreBD = nombreBaseDatos;
        }
    }

    conectar() {
        if(!LibMongo.conexion) {
            LibMongo.conexion = new Promise((resolve, reject) => {
                this.cliente.connect(err => {
                    if(err) reject(err);
                    resolve(this.cliente.db(this.nombreBD));
                });
            });
        }

        return LibMongo.conexion;
    }

    /*obtener(coleccion, consulta) {
        return this.conectar().then(db => {
            return db.collection(coleccion).find(consulta).toArray();
        });
    }*/

    obtenerPorId(coleccion, id) {
        return this.conectar().then(db => {
            return db.collection(coleccion).findOne({ _id: ObjectId(id) });
        });
    }

    obtenerUnoPorFiltro(coleccion, filtro) {
        return this.conectar().then(db => {
            return db.collection(coleccion).findOne(filtro);
        })
    }

    obtenerPorFiltro(coleccion, filtro) {
        return this.conectar().then(db => {
            return db.collection(coleccion).find(filtro).toArray();
        })
    }

    crear(coleccion: string, datos: any): string {
        return this.conectar().then(db => {
            return db.collection(coleccion).insertOne(datos);
        }).then(resultado => resultado.insertedId);
    }

    modificarPorId(coleccion, id, datos) {
        return this.conectar().then(db => {
            return db.collection(coleccion).updateOne({ _id: ObjectId(id) }, { $set: datos }, { upsert: true });
        }).then(resultado => resultado.upsertedId || id);
    }

    eliminar(coleccion, id) {
        return this.conectar().then(db => {
            return db.collection(coleccion).deleteOne({ _id: ObjectId(id) });
        }).then(() => id);
    }
}

export default LibMongo;