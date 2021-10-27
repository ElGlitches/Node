/**
 * Promises
 */

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(()=>{
      resolve({
        nombre: "Ivan",
        Apellido: "Duran",
      });
    },3000);
    } else {
      reject("No se pueden obtener datos");
    }
  });
  const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(()=>{
      resolve({
        nombre: "Alejandro",
        Apellido: "Luengo",
      });
    },3000);
    } else {
      reject("No se pueden obtener datos de data 2");
    }
  });
  console.log("inicio");
getData(false)
  .then((data) => {
    console.log(data);
    return getData2(true)
  })
  .then((data) =>{
      console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("fin");

// async awat


const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(()=>{
      resolve({
        nombre: "Ivan",
        Apellido: "Duran",
      });
    },3000);
    } else {
      reject("No se pueden obtener datos");
    }
  });
  const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(()=>{
      resolve({
        nombre: "Alejandro",
        Apellido: "Luengo",
      });
    },3000);
    } else {
      reject("No se pueden obtener datos de data 2");
    }
  });

const main = async () =>{
    try {
        let resultado = await getData(false);
        let resultado2 = await getData2(true);
        console.log(resultado);
        console.log(resultado2);

    } catch(error){
        console.log(error);
    }

};

main()
