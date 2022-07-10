/*
Una lista puede ser el campo de un registro. Mira estos registros de postres, de los cuales sabemos cuantos minutos de coccion requieren y sus ingredientes:
let flanCasero = { ingredientes: ["huevos", "leche", "azucar", "vainilla"], tiempoDeCoccion: 50 }
let cheesecake = { ingredientes: ["frambuesas", "queso crema"], tiempoDeCoccion: 80 }
let lemonPie = { ingredientes: ["jugo de limon", "almidon de maiz", "leche", "huevos"], tiempoDeCoccion: 65 }
Define la funcion masDificilDeCocinar, que recibe dos registros de postres como argumentos y retorna el que tiene mas ingredientes de los dos.
*/


function masDificilDeCocinar(postre1,postre2){
  if (longitud(postre1.ingredientes)>longitud(postre2.ingredientes))
    return postre1;
  else return postre2;
}
