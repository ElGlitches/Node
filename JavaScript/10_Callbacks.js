// CallBacks

const suma = (a, b, cb) => cb(a + b);

const imprimir = (data) => console.log(data);

suma(1, 2, imprimir);

//////////////////////////////

const getData = (cb, cbError) => {
  if (true) {
    setTimeout(() => {
      cb({
        nombre: "Ivan",
        apellido: "Duran",
      });
    }, 3000);
  } else {
    cbError(new Error("No se pueden obtener datos"));
  }
};

const imprimir = (data) => console.log(data);
const errorHandler = (error) => console.log(error);

getData(imprimir, errorHandler);
