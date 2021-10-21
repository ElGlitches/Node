/**
 * Variables
 * Formas de definir variables
 *
 * var
 * let
 * const
 *
 */

// variables con var = globales en el codigo

var nombre = "Ivan";
console.log(nombre);

var edad = 32;
console.log(edad);

var persona = {
  nombre: "Ivan",
  apellido: "duran",
  edad: 32,
  direccion: { calle: "brisas", numero: 2345 },
  ciudades: ["Santiago", "Vina", "Chiloe"],
};

ciudad = "santiago";
console.log(ciudad);

//variables let = bloque en codigo

let nombre = "Ivan";
console.log(nombre);

{
  let saludo = "hola";
  console.log(saludo);
}

console.log(saludo);

// variables const, no se puede cambiar el valor

const PI = 3.14;
console.log(PI);

var nombre = "Ivan";
var saludo = `hola soy  ${nombre}
como estas?`;
console.log(saludo);
