var nombres = new Map();
var silabas=['a','e','i','o','u'];
var consonantes=['b','c','d','f','g','j','k','l','m','p','r','v'];
for(let i=0;i<=9;i++){
    var nombre_aux='';
    for(let i=0;i<=Math.random()*2;i++){
        nombre_aux+=(consonantes[Math.floor(Math.random()*consonantes.length)]);
        nombre_aux+=(silabas[Math.floor(Math.random()*silabas.length)]);
        nombre_aux+=(consonantes[Math.floor(Math.random()*consonantes.length)]);
        nombre_aux+=(silabas[Math.floor(Math.random()*silabas.length)]);
    }
    nombres.set(i,nombre_aux);
}   
console.log(nombres);    