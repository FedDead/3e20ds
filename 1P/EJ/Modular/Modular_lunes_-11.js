let day=new Date();
let mes=new Date();
let diasemana=new Date();
var semana=new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado');
const mod=11;
day=day.getDate();
mes=mes.getMonth();
console.log("El dia actual es "+day);
day=day-mod;
diasemana=day;
diasemana=diasemana%7-1;
if(mes==0 || mes==1 || mes==3 || mes==5 ||mes==5 || mes==7||mes==8||mes==10){
    mes=31;
}
else if(mes==2 || mes==4 || mes==6 || mes==9 ||mes==11){
    mes=30;
}
for(let i=0;i<=6;i++){
    if(diasemana==i){
        diasemana=semana[i];
    }
}
if(day<0){
    day=mes+day; 
    console.log("El dia hace 11 dias es "+day+" "+diasemana);
}
else
console.log("El dia hace 11 dias es "+day+" "+diasemana);
