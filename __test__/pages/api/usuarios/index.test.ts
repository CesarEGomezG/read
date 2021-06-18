import { funcionExisteUsuario, funcionCrearUsuario } from "../../../../pages/api/usuarios/index";

describe("funcionExisteUsuario", () => {
    test("Pasar id de usuario que si existe", async () => {
        expect(await funcionExisteUsuario("60c6380a164af5b0f4e1c457")).toBe(true);
    });
});