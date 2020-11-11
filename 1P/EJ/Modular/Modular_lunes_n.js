let day=new Date();
let mes=new Date();
const n=28;
day=day.getDate();
mes=mes.getMonth()+1;
console.log("El dia actual es "+day);
day=day+n;
if(mes==0 || mes==1 || mes==3 || mes==5 ||mes==5 || mes==7||mes==8||mes==10){
    mes=31;
}
else if(mes==2 || mes==4 || mes==6 || mes==9 ||mes==11){
    mes=30;
}
if(day>mes){
    day=day-mes; 
    console.log("El dia despues de 11 dias es "+day);
}
else if(day<mes){ 
    console.log("El dia despues de 11 dias es "+day);
}
