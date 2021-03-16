
class Complejos {

   constructor(private _real: number, private _imaginario: number) {
   }
   
   public static suma(complejo_a: Complejos, complejo_b: Complejos): Complejos {
      const num__real: number = complejo_a._real + complejo_b._real;
      const num_imaginario: number = complejo_a._imaginario + complejo_b._imaginario;
      return new Complejos(num__real, num_imaginario);

   }
   public static resta(complejo_a: Complejos, complejo_b: Complejos): Complejos {
      let num__real = complejo_a._real - complejo_b._real;
      let num_imaginario = complejo_a._imaginario - complejo_b._imaginario;
      return new Complejos(num__real, num_imaginario);
   }

   public static multiplicacion(complejo_a: Complejos, complejo_b: Complejos): Complejos {
      let lista_sin_i = new Array<number>()
      let lista_con_i = new Array<number>()
      let lista_con_i_2 = new Array<number>()
      
      //1. sacamos de los parentesis
      lista_sin_i.push(complejo_a._real * complejo_b._real);

      lista_con_i.push(complejo_a._real * complejo_b._imaginario);

      let tercer: number = complejo_a._imaginario * complejo_b._real;

      // efectuamo la soperacion de la lista con i, pues ahi terminos semejantes
      if (tercer > 0) lista_con_i[0] = lista_con_i[0] + tercer

      else lista_con_i[0] = lista_con_i[0] - tercer

      lista_con_i_2.push(complejo_a._imaginario * complejo_b._imaginario);
      // le quitamo el i^2 para convertirlo en un numero _real
      lista_con_i_2[0] = lista_con_i_2[0] * - 1
      // finalmente le metemos en la lista con i la suma o resta
      // con el numero de la lista i^2 ya convertido a entero
      lista_sin_i[0] = lista_sin_i[0] + (lista_con_i_2[0])
      // y retornamos de la forma 5 + 3i
      return new Complejos(lista_sin_i[0], lista_con_i[0]);
   }

   public static division(complejo_a: Complejos, complejo_b: Complejos): Complejos {
      // multiplicamos el complejo_a(numerado) por el conjugado del complejo_b
      let conjugado_complejo_b = new Complejos(complejo_b._real, complejo_b.imaginario * -1);
      let result_mult_num = Complejos.multiplicacion(complejo_a, conjugado_complejo_b);
      let result_denominadores = new Complejos(Math.pow(complejo_b._real, 2), Math.pow(complejo_b._imaginario, 2));
      let resul_precos: number = (result_denominadores.real + result_denominadores.imaginario);

      result_denominadores.real = resul_precos;
      result_denominadores.imaginario = resul_precos;

      return new Complejos(result_mult_num.real / result_denominadores.real, result_mult_num.imaginario / result_denominadores.imaginario);

   }
   public get real(): number {
      return this._real;
   }
   public get imaginario(): number {
      return this._imaginario;
   }
   public get complejo(): string {
      return `${Math.round(this._real)} , ${Math.round(this.imaginario)}i`
   }
   public set real(real: number) {
      this._real = real;
   }
   public set imaginario(imaginario: number) {
      this._imaginario = imaginario;
   }
}









export default Complejos