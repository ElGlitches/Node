/**
 * Control de flujo
 */

// if , else if, else

var numero1 = 2;
var numero2 = 5;

var semaforo = "amarillo";
if (semaforo === "rojo") {
  console.log("para");
} else if (semaforo === "amarillo") {
  console.log("apurate");
} else if (semaforo === "verde") {
  console.log("Voh dale");
} else {
  console.log("Anda al oculista daltonico");
}

// switch
var llueve = true;
switch (llueve) {
  case true:
    console.log("Entra la ropa");
    break;
  case false:
    console.log("Salio el sol");
    break;
  default:
    console.log("Nani!");
}

//Ejercicios

var dia = "Lunfes";

if (dia === "Lunes") {
  console.log(dia + " = " + "Monday");
} else if (dia === "Martes") {
  console.log(dia + " = " + "Tuesday");
} else if (dia === "Miercoles") {
  console.log(dia + " = " + "Wednesday");
} else if (dia === "Jueves") {
  console.log(dia + " = " + "Turday");
} else if (dia === "Viernes") {
  console.log(dia + " = " + "Friday");
} else if (dia === "Sabado") {
  console.log(dia + " = " + "Saturday");
} else if (dia === "Domingo") {
  console.log(dia + " = " + "Sunday");
} else {
  console.log("NANI!!!!!!!!!");
}

var dia = "Martes";
switch (dia) {
  case "Lunes":
    console.log(dia + " = " + "Monday");
    break;
  case "Martes":
    console.log(dia + " = " + "Tuesday");
    break;
  case "Miercoles":
    console.log(dia + " = " + "Wednesday");
    break;
  case "Jueves":
    console.log(dia + " = " + "Turday");
    break;
  case "Viernes":
    console.log(dia + " = " + "Friday");
    break;
  case "Sabado":
    console.log(dia + " = " + "Saturday");
    break;
  case "Domingo":
    console.log(dia + " = " + "Sunday");
    break;
  default:
    console.log("NANI!!!!!!!!!");
}
