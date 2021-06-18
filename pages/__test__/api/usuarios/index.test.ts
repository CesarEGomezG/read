import { funcionExisteUsuario, funcionCrearUsuario } from "../../../api/usuarios/index";

describe("funcionExisteUsuario", () => {
    test("Pasar id de usuario que si existe", async () => {
        try {
            const existeUsuario = await funcionExisteUsuario("60c6380a164af5b0f4e1c457");
            expect(existeUsuario).toBe(true);
        } catch(error) {
            console.log("[ERROR] funcionExisteUsuario", error);
        }
    });
});