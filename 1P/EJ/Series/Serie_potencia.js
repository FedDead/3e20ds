Pot=0,Elev=0,Tot=0;                                                              //  Declaramos las variables que usaremos como potencia, a que numero estara elevado y el total.
for(let i=0;i<10;i++){
    Elev=Math.round(Math.random()*(1-10)+10);                                  //   Guardamos el valor aletorio al cual nuestro numero sera elevado.
    Pot=Math.round(Math.random()*(10-20)+20);                                 //    Guardamos el valor aletorio del numero que elevaran. 
    Tot=Math.pow(Pot,Elev);                                                  //     Usamos la funcion math.pow para elevar nuestra variable y la guardamos en total.
    console.log("El numero "+Pot+" es elevado a la "+Elev+" = "+Tot);
}