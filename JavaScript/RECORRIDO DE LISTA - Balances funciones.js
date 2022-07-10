/*
Define las siguientes funciones:
meses, la cual dada una lista con registros devuelve una lista de meses ;
afortunados, que filtra aquellos registros que tuvieron una ganancia mayor a $1000 ;
mesesAfortunados, devuelve aquellos meses que fueron afortunados.
*/


function meses(balances){
  let meses = [];
  for (let mes of balances){
    agregar(meses, mes.mes);
  }
  return meses;
}

function afortunados(balances){
  let afortunados = [];
  for (let mes of balances){
    if (mes.ganancia>1000) agregar(afortunados,mes);
  }
  return afortunados;
}

function mesesAfortunados(balances){
  return meses(afortunados(balances));
}
