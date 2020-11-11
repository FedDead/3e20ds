let Pot=0,Elev=0;                                                               //  Declaramos las variables que usaremos como potencia, a que numero estara elevado y el total.
let array=new Array(10);                                                       //  Definimos el array que usaremos y su tamaño.
for(let i=1;i<=10;i++){
    Elev=Math.round(Math.random()*(1-10)+10);                                //   Guardamos el valor aletorio al cual nuestro numero sera elevado.
    Pot=Math.round(Math.random()*(10-20)+20);                               //    Guardamos el valor aletorio del numero que elevaran. 
    array[i]=Math.pow(Pot,Elev);                                           //     Usamos la funcion math.pow para elevar nuestra variable y la guardamos en el array.
}
for(let i=1;i<=10;i++){
    console.log("Nuestro array en la posicion ["+i+"] es "+array[i]);   // Mostramos los valores del array.
}