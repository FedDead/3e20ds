for(let i=0;i<=9;i++){    
    console.log(Serie_positiva_recursiva(i));           
}
function Serie_positiva_recursiva(n){
    if(n==0){
        return 1;
    }
    return 2+Serie_positiva_recursiva(n-1);
}