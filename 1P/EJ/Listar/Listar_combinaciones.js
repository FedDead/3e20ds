const n=[3,1,4,2,3];
function combinacion(n){
    const combinaciones=[];
    const combinado =(arr,combi=[])=>{
        if(!arr.length){
            combinaciones.push(combi)
        }
        for(let i=0;i<arr.length;i++){
            let curr=arr.slice()
            let next=curr.splice(i,1)
            combinado(curr,combi.concat(next))
        }
    }
    combinado(n);
    return combinaciones;
}
console.time();
combinacion(n);
console.timeEnd();
console.log("Las combinaciones son: "+combinacion(n));
console.log("Tiene una complejidad computacional exponencial");