/**
 * Operadores
 */

/**
 * Operadores de asignacion
 */

//Operador de asignacion

var x = 2;
var y = true;

//operador de asignacion de suma (+=)

var x = 26;
var y = 16;

x += y;

console.log(x);

//operador de asignacion de resta (-=)

var x = 26;
var y = 16;

x -= y;

console.log(x);

//operador de asignacion de multiplicacion (*=)

var x = 26;
var y = 16;

x *= y;

console.log(x);

//operador de asignacion de division (/=)

var x = 26;
var y = 16;

x /= y;

console.log(x);

//operador de asignacion de residuo (%=)

var x = 26;
var y = 16;

x %= y;

console.log(x);

//operador de asignacion de exponenciacion (**=)

var x = 26;
var y = 16;

x **= y;

console.log(x);

/**
 * Operadores de compararacion
 *
 */

//Operador igual (==)

console.log(3 == 3);
console.log(3 == "3");

//operador no es igual (!=)

console.log(3 != 3);

//operador estrictamente igual (===)
console.log(3 === 3);
console.log(3 === "3");

//operador desigualdad estricta (!==)
console.log(3 !== 3);
console.log(3 != "3");

//operador >, >=, <, <=
console.log(3 > 3);
console.log(3 < 3);
console.log(3 >= 3);
console.log(3 <= 3);

// operadores aritmeticos (+, -, *, /, %, **)

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// operadores de incremento (++)

var numero = 0;

console.log(++numero);
console.log(numero++);
console.log(numero);

// operadores de decremento (--)

var numero = 0;

console.log(--numero);
console.log(numero--);
console.log(numero);

/**
 * operadores logicos
 */

//AND

console.log(true && true);
console.log(2 > 3 && 1 <= 2);

//OR

console.log(true || true);
console.log(true || false);
console.log(false || false);

// NOT

console.log(!true);
console.log(!false);

//operador de cadena o concatenacion (+)

var nombre = "Ivan";
var apellido = "Duran";
var edad = 32;

console.log(nombre + " " + apellido + " " + edad);

// operadort codicional (condicion)

console.log(2 > 3 ? "Es mayor" : "Es menor");

// Operador de desestructuracion

var persona = {
  nombre: "Ivan",
  apellido: "Duran",
  edad: 32,
};

var { nombre: fsd, edad } = persona;
console.log(fsd);
console.log(edad);
console.log(persona);

// Operador de desestructuracion arreglos

var arreglo = [1, 322, 3, 4, 5, 6, 4];
var [primeraPosicion, dos] = arreglo;
console.log(primeraPosicion);
console.log(dos);

/**
 *  Operador de miembro o propiedad
 */

//notacion punto

var persona = {
  nombre: "Ivan",
  apellido: "Duran",
  edad: 32,
};

console.log(persona.edad);
console.log(persona.nombre);

//notacion corchetes

var persona = {
  nombre: "Ivan",
  apellido: "Duran",
  edad: 32,
};

console.log(persona["edad"]);
console.log(persona["nombre"]);

// notacion por corchetes arreglo

var arreglo = [32, 43, 44, 23, 11, 21];
console.log(arreglo[4]);

// operador de determinacion de tipo (typeof)

console.log(typeof 'ivan');
console.log(typeof 34);
console.log(typeof true);