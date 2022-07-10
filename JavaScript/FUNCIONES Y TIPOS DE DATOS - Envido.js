/*
Queremos calcular cuantos puntos de envido suma un jugador. Sabemos que:
Si las dos cartas son del mismo palo, el valor del envido es la suma de sus valores de envido mas 20.
De lo contrario, el valor del envido es el mayor valor de envido entre ellas.
*/

function puntosDeEnvidoTotales(num1,palo1,num2,palo2){
    if (palo1 === palo2) return valorEnvido(num1)+valorEnvido(num2)+20;
    else return Math.max(valorEnvido(num1), valorEnvido(num2));
}