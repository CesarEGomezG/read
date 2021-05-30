import { MongoClient, ObjectId } from "mongodb";
import config from "../config";

const contraseniaMongo = encodeURIComponent(config.contraseniaMongo);
const nombreBaseDatos = config.nombreBaseDatos;

const urlConexion = `mongodb+srv://db_user_general:${contraseniaMongo}@helloworld.56p3x.mongodb.net/${nombreBaseDatos}?retryWrites=true&w=majority`;

class LibMongo {
    cliente = null
    nombreBD = null
    static conexion = null

    constructor() {
        this.cliente = new MongoClient(urlConexion, { useNewUrlParser: true, useUnifiedTopology: true });
        this.nombreBD = nombreBaseDatos;
    }

    conectar() {
        if(!LibMongo.conexion) {
            LibMongo.conexion = new Promise((resolve, reject) => {
                this.cliente.connect(err => {
                    if(err) reject(err);

                    console.log("Se ha conectado a mongo con exito");
                    resolve(this.cliente.db(this.nombreBD));
                });
            });
        }

        return LibMongo.conexion;
    }

    obtener(coleccion, consulta) {
        return this.conectar().then(db => {
            return db.collection(coleccion).find(consulta).toArray();
        });
    }

    obtenerPorId(coleccion, id) {
        return this.conectar().then(db => {
            return db.collection(coleccion).findOne({ _id: ObjectId(id) });
        });
    }

    crear(coleccion, datos) {
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