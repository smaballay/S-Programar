/*
Ya hicimos una funcion para poder saber la cantidad de balances positivos (cantidadDeBalancesPositivos), ahora completa la funcion balancesPositivos que toma los balances de un periodo y devuelve una lista con aquellos cuya ganancia fue mayor a cero.
*/


function balancesPositivos(balances) {
  let meses = [];
  for (let mes of balances) {
    if (mes.ganancia>0){
      agregar(meses, mes)
    }
  }
  return meses;
}
