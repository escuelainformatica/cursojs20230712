// operaciones unitarias
let numero=20;
console.log(++numero); // ++ para sumar un valor.
// operaciones binarias
console.log(1+2);
console.log(1+2.2);
console.log(1-2);
console.log(1*2);
console.log(10/3);
console.log(1+2+3); // sigue siendo binario.
console.log("hola" + "mundo"); // sumo texto, se va a concatenar.
console.log("hola"+30); // texto con un numero se concatena.
console.log(30+"hola"); // texto con un numero se concatena.
console.log("hola" & 30); // & no es concatenacion, es una operacion de bits.
console.log("hola" - "mundo"); // NaN (es un error)
console.log(1+2*(3+50));
// operaciones binarias con booleanos.
console.log(true==false); // false
console.log(1==1); // true
console.log("1"==1); // type juggling (true)
console.log("1"===1); // false === se hace una comparacion incluyendo el tipo de dato
console.log(1!=1); // false
// <  > <= >= otras comparaciones logicas
console.log("1"!==1); // true
// operaciones unitarias con booleanos
console.log(!true); // ! es una negacion.
// operaciones binarias con booleanos
console.log(true && true); // (true) && "y" logico. Para que sea verdadero, todo tiene que ser verdadero
console.log(true || true); // (true) || "o" logico. Para que sea verdadero, uno de los valores tiene que ser verdadero
// ternaria
console.log(true?"es verdadero":"es falso"); // condicion ? si la condicion se cumple : en caso de que no se cumpla

if(true) {
    console.log("es verdadero");
} else {
    console.log("es falso");
}


