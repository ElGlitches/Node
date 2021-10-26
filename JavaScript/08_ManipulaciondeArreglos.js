/**
 * Manipulacion de arreglos
 */

//For Each

var letras = ["a", "b", "c", "d", "e"];
//console.log(letras.length);

// for (let i = 0; i < letras.length; i++){
//     const element = letras [i];
//     console.log(element);
// }

letras.forEach((elemento) => console.log(elemento));

// push -shift - pop

var letras = ["a", "b", "c", "d", "e"];
letras.push("f");
console.log(letras);

letras.shift();
var primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);

letras.pop();
var ultimoElemento = letras.pop();
console.log(ultimoElemento);
console.log(letras);

//map
var estudiantes = ["juan", "andrea", "jose", "ada"];
var asistencia = estudiantes.map((nombre) => `${nombre}...`);

console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var productos = [
  { nombre: "poleras", precio: 10000 },
  { nombre: "pantalon", precio: 20000 },
  { nombre: "chaqueta", precio: 30000 },
];

var impuesto = productos.map((producto) => {
  return {
    ...producto,
    impuesto: 1.19,
  };
});

var precios = productos.map((producto) => producto.precio);

console.log(productos);
console.log(precios);

// filter

var estudiantes = [
  { nombre: "Juan", edad: 22, matriculado: false },
  { nombre: "Pepa", edad: 25, matriculado: true },
  { nombre: "Jose", edad: 20, matriculado: false },
  { nombre: "Andrea", edad: 27, matriculado: true },
  { nombre: "pedro", edad: 21, matriculado: false },
  { nombre: "kata", edad: 23, matriculado: true },
]
var filtro = estudiantes.filter((estudiante) => estudiante.edad >=22 && estudiante.matriculado == true);
console.log(filtro);

//reduce
var notas =[1,2,3,4,5,6,7];
var suma = notas.reduce((acumulador,notas ) => acumulador + notas, 0);
console.log(notas);
console.log(suma);
console.log(suma / notas.length);

var edades= [20,21, 22,23,24,25,26,27,28,29,30,];
