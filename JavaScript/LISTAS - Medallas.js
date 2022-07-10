/*
Define nuevamente la funcion medallaSegunPuesto, pero esta vez usando como maximo un unico if. 
*/


let medallas=["oro","plata","bronce"]

function medallaSegunPuesto(puesto){
  if (puesto===1 || puesto===2 || puesto===3){
    return medallas[puesto-=1];
  } else {
    return "nada";
  }
}