/*
El jurado de un torneo nos pidio la funcion medallaSegunPuesto que retorne la medalla que le corresponde a los primeros puestos, segun la siguiente logica:
Primer puesto: le corresponde "oro"
Segundo puesto: le corresponde "plata"
Tercer puesto: le corresponde "bronce"
Otros puestos: le corresponde "nada"
*/


function medallaSegunPuesto(puesto){
  if(puesto===1) return "oro";
  else if(puesto===2) return "plata";
  else if(puesto===3) return "bronce";
  else return "nada";
}