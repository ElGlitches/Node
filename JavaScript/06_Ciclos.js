/**
 * Ciclos
 */

//While

var contador = 0;
while (contador <= 4) {
  console.log("Esto es un ciclo While");
  contador += 1;
}

//Do while se ejecuta por lo menos una vez

var contador = 1;
do {
  console.log("Do While");
  contador += 1;
} while (contador <= 9);

//For

for (let i = 1; i <= 10; i++) {
  console.log("Ciclo For");
}

//For in
var persona = {
  nombre: "Ivan",
  Apellido: "Duran",
  Edad: "32",
};
for (let clave in persona) {
  console.log(clave, persona[clave]);
}

// for of

var arreglo = [1, 2, 3, 4, 5];
var persona = ["Ivan", "Duran", "32"];

for (let valor of persona) {
  console.log(valor);
}

/**
 * 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

Pista: anidamiento.

2.Realice el equivalente con la declaración while y do-while

 */

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
for (let i = 3; i <= 30; i += 3) {
  console.log(i);
}
for (let i = 4; i <= 40; i += 4) {
  console.log(i);
}
for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}
for (let i = 6; i <= 60; i += 6) {
  console.log(i);
}
for (let i = 7; i <= 70; i += 7) {
  console.log(i);
}
for (let i = 8; i <= 80; i += 8) {
  console.log(i);
}
for (let i = 9; i <= 90; i += 9) {
  console.log(i);
}
for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}

//
var numero = 2;
var numero1;
while (numero <= 20) {
  console.log("multiplicacion 2 x =  " + numero);
  numero += 2;
}
var numero = 3;
while (numero <= 30) {
  console.log("multiplicacion 3 x =  " + numero);
  numero += 3;
}
var numero = 4;
while (numero <= 40) {
  console.log("multiplicacion 4 x =  " + numero);
  numero += 4;
}
var numero = 5;
while (numero <= 50) {
  console.log("multiplicacion 5 x =  " + numero);
  numero += 5;
}
var numero = 6;
while (numero <= 60) {
  console.log("multiplicacion 6 x = " + numero);
  numero += 6;
}
var numero = 7;
while (numero <= 70) {
  console.log("multiplicacion 7 x = " + numero);
  numero += 7;
}
var numero = 8;
while (numero <= 80) {
  console.log("multiplicacion 8 x = " + numero);
  numero += 8;
}
var numero = 9;
while (numero <= 90) {
  console.log("multiplicacion 9 x = " + numero);
  numero += 9;
}
var numero = 10;
while (numero <= 100) {
  console.log("multiplicacion 10 x = " + numero);
  numero += 10;
}
