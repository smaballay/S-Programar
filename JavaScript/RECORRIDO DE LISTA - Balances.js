/* 
Ana quiere saber la ganancia promedio de los balances positivos.
Define las funciones:
cantidadDeBalancesPositivos
gananciaPositiva, que es la suma de las ganancias de los balances positivos
promedioGananciasPositivas invocando gananciaPositiva y cantidadDeBalancesPositivos.
*/


let balances = [
  { mes: "julio", ganancia: 50 }, 
  { mes: "agosto", ganancia: -12 }, 
  { mes: "septiembre", ganancia: 1000 }, 
  { mes: "octubre", ganancia: 300 }, 
  { mes:  "noviembre", ganancia: 200 }, 
  { mes: "diciembre", ganancia: 0 }
];

function cantidadDeBalancesPositivos(balances) {
  let cantidad = 0;
  for (let mes of balances) {
    if (mes.ganancia>0) cantidad +=1;
  }
  return cantidad;
}

function gananciaPositiva(balances) {
  let suma = 0;
  for (let mes of balances) {
    if (mes.ganancia>0) suma = suma + mes.ganancia;
  }
  return suma;
}

function promedioGananciasPositivas(balances){
  return gananciaPositiva(balances) / cantidadDeBalancesPositivos(balances)
}
