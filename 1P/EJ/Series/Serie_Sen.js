let Tot=0;                                                  //  Declaramos la variables que usaremos para guardar los valores de seno.
for(let i=1;i<=10;i++){
    Tot=i;                                                 //   Guardamos el valor de i en Tot para que este en constante cambio.
    Tot=Math.sin(Tot);                                    //    Usamos la funcion math.sin para calcular el seno y lo guardamos en variable Tot.
    console.log("El seno de "+i+" es "+Tot);
}