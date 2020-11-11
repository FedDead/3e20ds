let hour=new Date();
const N=20;
hour=hour.getHours();
console.log("La hora actual es "+hour);
hour=hour+N%24;
console.log("La hora despues de "+N+" horas es "+hour);