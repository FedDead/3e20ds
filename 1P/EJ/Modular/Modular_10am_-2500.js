let hour=new Date();
const mod=-2500;
hour=hour.getHours();
console.log("La hora actual es "+hour);
hour=hour-mod%24;
console.log("La hora antes de la 2500 horas es "+hour);