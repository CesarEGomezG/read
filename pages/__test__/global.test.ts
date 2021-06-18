const saludo = "Hola mundo";

describe("Pruebas globales", () => {
    test("Saludo debe decir 'Hola mundo'", () => {
        expect(saludo).toBe("Hola mundo");
    });
});