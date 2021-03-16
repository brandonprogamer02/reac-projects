

const getNombre = (nombre: string) => `Mi nombre es ${nombre}` 

const _test = describe('esto es un grupo de test', () => {

   const nombre = getNombre('Pedro')

   test('esto es una prueba unitaria', () => {
      expect(nombre).toMatch('Mi nombre')
   })

   test('esto es una prueba unitaria 2', () => {
      expect(nombre).toMatch('Mi')
   })

})


export default _test