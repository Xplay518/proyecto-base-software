const totalizador = require("./totalizador.js");


describe("Totalizador", () =>{
    it("Calculamos el precio neto, ejemplo: generar(20, 3, NV) => 60", () => {
        let totalizar = new totalizador(20, 3,"NV");
        expect(totalizar.get_precio_neto()).toEqual(60);
      });
    });