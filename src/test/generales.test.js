import { TestWatcher } from "@jest/core";

/* hace descripciond e lo que va a hacer la prueba */
describe('Probando Jest', ()=>{
    test('Prueba de objetos iguales',()=>{
        const datos1 = {
            nombre: 'Abby RT',
            edad:25
        };
        const datos2 = {
            nombre: 'Abby RT',
            edad:25
        };

        expect(datos1).toEqual(datos2);


    })
});
