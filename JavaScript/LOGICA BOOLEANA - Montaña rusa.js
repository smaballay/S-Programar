/*
En un parque de diversiones de la ciudad instalaron una nueva montaña rusa y nos pidieron ayuda para que le digamos a las personas si pueden subirse o no antes de hacer la fila. Los requisitos para subir a la atraccion son:
Alcanzar la altura minima de 1.5m (o 1.2m si esta acompañada por una persona adulta)
No tener ninguna afeccion cardiaca
Define la funcion de 3 parametros puedeSubirse que recibe una altura de una persona en metros, si esta acompañada y si tiene alguna afeccion cardiaca.
*/


function puedeSubirse(altura,compania,cardiopatia){
  return altura>=1.5&&!cardiopatia || compania&&altura>=1.2&&!cardiopatia
}
