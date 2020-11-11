let L1=2,L2=1,T=1;                      //  Declaramos las variables que usaremos.
console.log(L1);                       //   Imprimimos el primer valor de la serie de Lucas.
for(let i=1;i<=9;i++){               //    Comenzamos con el ciclo for para conseguir las 10 series de Lucas.
console.log(T);
T=L1+L2;                            //  Sumamos las variables.
L1=L2;                             //   Sustituimos el valor de L1 por el L2 para guardar el valor pasado de la primera sucesion.
L2=T;                             //    Sustituimos el valor L2 que era es primer valor por el T que es el valor de la siguiente sucesion.
}