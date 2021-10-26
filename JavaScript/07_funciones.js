/**
 * Funciones
 */

function saludar() {
  console.log("Hola");
}
saludar();

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("Ivan");

function saludar(nombre) {
  return `Hola ${nombre}`;
}
var saludo = saludar("Ivan");
console.log(saludo);

//Expresion anonima
var suma = function(a,b){
    return a + b;
}
console.log(suma(2, 3));

var resultado= suma(2, 4);
console.log(resultado);

//Funcion Flecha
var restar = (a, b)=>{
    if (typeof a === 'number' && typeof b === 'number'){
        return a - b;
    } else {
        return 'Solo numeros';
    }
    
}
console.log(restar(7, 3));

var multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 4)); 