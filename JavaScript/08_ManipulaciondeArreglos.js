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

//map (agrega un elemento)
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

// filter (retorna todos los elementos que contengan la condicion)

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

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, item) =>{
        if (item){
            acumulador.matriculado +=1
            
        }else{
            acumulador.noMatriculado +=1
        }
        return acumulador;
    },{ matriculado :0 ,noMatriculado :0})

    console.log(estudiantes);
    console.log(resultado);

    //some (alguos pueden cumplir la condicion)
    var numeros =[1,2,3,4,5,6,7,8,9,10];
    var resultado = numeros.some((numero) => numero % 2 === 0);
    console.log(resultado);

    //Every (todos los elementos deben cumplir la condicion)
    var numeros =[2,4,6,8,10];
    var resultado = numeros.every((numero) => numero % 2 === 0);
    console.log(resultado);

    //find ( busca un elemento que cumpla la condicion)
    var clientes =[
        { id: 1, nombre: 'kata'},
        { id: 2, nombre: 'juan'},
        { id: 3, nombre: 'ale'},
        { id: 4, nombre: 'jose'},
        { id: 5, nombre: 'ada'},
        { id: 6, nombre: 'miguel'},
    ]
    var cliente =clientes.find((cliente) => cliente.id === 1 && cliente.nombre ==='kata');
    console.log(cliente);
    console.log(clientes);

    //findIndex (retorna la posicion dentro del arraid)

    var clientes =[
        { id: 1, nombre: 'kata'},
        { id: 2, nombre: 'juan'},
        { id: 3, nombre: 'ale'},
        { id: 4, nombre: 'jose'},
        { id: 5, nombre: 'ada'},
        { id: 6, nombre: 'miguel'},
    ]
    var posicion =clientes.findIndex((cliente) => cliente.id === 6);
    console.log(posicion);
    console.log(clientes[posicion]);

    //includes
    var mascotas = ['perro', 'gato', 'conejo'];
    var resultado = mascotas.includes('gato')
    console.log(resultado);

    console.log('Ivan'.includes('a'));

    var buscador = (parametro) =>{
        let clientes =[
            { id: 1, nombre: 'kata'},
            { id: 2, nombre: 'juan'},
            { id: 3, nombre: 'ale'},
            { id: 4, nombre: 'jose'},
            { id: 5, nombre: 'ada'},
            { id: 6, nombre: 'miguel'},
        ]
        return clientes.filter((cliente) => cliente.nombre.includes(parametro))
    }

    console.log(buscador('a'));

   // join concatena

var elementos = ['aire', 'fuego', 'tierra', 'agua']
var resultado = elementos.join(' - ');
console.log(resultado);

var clientes =[
        { id: 1, nombre: 'kata'},
        { id: 2, nombre: 'juan'},
        { id: 3, nombre: 'ale'},
        { id: 4, nombre: 'jose'},
        { id: 5, nombre: 'ada'},
        { id: 6, nombre: 'miguel'}
]

var csvGenerator = (array, separador = ' , ') =>{
    let headers = Object.keys(array[0]).join(separador)
    let data = array.map((element) => Object.values(element).join(separador))
    console.log(headers);
    data.forEach(element => console.log(element))
}

csvGenerator(clientes);

//console.log(Object.values({ id: 5, nombre: 'kata'}));
//console.log(Object.keys({ id: 5, nombre: 'kata'}));

//concat (nos permite concatenar 2 arreglos)

var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2);
var array4 = [...array1, ...array2]
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

 //sort (ordena en base al codigo asq)
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1.sort());

var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May']
console.log(meses.sort());

var array = [1, 100, 43, 455,7, 66, 0]
var ordenado = array.sort((a, b) => a - b);
console.log(ordenado);

//splice
var nombre = ['Ivan', 'Jose','juan'];
nombre.splice(1, 1, 'katy')
console.log(nombre);

//slice
var nombre = ['Ivan', 'Jose','juan'];
var resultado = nombre.slice(1, 2); // no incluye la ultima posicion
console.log(resultado);