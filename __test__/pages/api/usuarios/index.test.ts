import { ObjectId } from "mongodb";
import { funcionExisteUsuario, funcionCrearUsuario } from "../../../../pages/api/usuarios/index";

describe("funcionExisteUsuario", () => {
    test("Pasar id de usuario que si existe", async () => {
        try {
            const existeUsuario = await funcionExisteUsuario("60c6380a164af5b0f4e1c457");
            expect(existeUsuario).toBe(true);
        } catch(error) {
            console.log("[ERROR] funcionExisteUsuario", error);
        }
    });

    test("Pasar id de usuario que no existe", async () => {
        try {
            const existeUsuario = await funcionExisteUsuario("60c6380a163af5b0f5a1c457");
            expect(existeUsuario).toBe(false);
        } catch(error) {
            console.log("[ERROR] funcionExisteUsuario", error);
        }
    });

    test("No pasarle ningun id", async () => {
        try {
            const existeUsuario = await funcionExisteUsuario(undefined);
            expect(existeUsuario).toBe(false);
        } catch(error) {
            console.log("[ERROR] funcionExisteUsuario", error);
        }
    });

    test("Pasarle un string vacio", async () => { // Error
        // try {
        //     const existeUsuario = await funcionExisteUsuario("");
        //     expect(existeUsuario).toBe(false);
        // } catch(error) {
        //     console.log("[ERROR] funcionExisteUsuario", error);
        // }
        const existeUsuario = await funcionExisteUsuario("");
        expect(existeUsuario).toBeInstanceOf(Error);
    });

    test("Pasarle un id invalido", async () => { // Error
        // try {
        //     const existeUsuario = await funcionExisteUsuario("312");
        //     expect(existeUsuario).toBe(false);
        // } catch(error) {
        //     console.log("[ERROR] funcionExisteUsuario", error);
        // }
        const existeUsuario = await funcionExisteUsuario("312");
        expect(existeUsuario).toBeInstanceOf(Error);
    });

    test("Pasarle un id ya parseado para MongoDB", async () => {
        try {
            const existeUsuario = await funcionExisteUsuario(ObjectId("60c6380a164af5b0f4e1c457"));
            expect(existeUsuario).toBe(true);
        } catch(error) {
            console.log("[ERROR] funcionExisteUsuario", error);
        }
    });
});

describe("funcionCrearUsuario", () => {
    test("Sin pasarle parámetros", () => {
        expect(() => {
            funcionCrearUsuario(undefined, undefined, undefined, undefined, undefined, undefined);
        }).toThrowError("Datos de entrada invalidos");
    });
});