const n=[3,1,4,2,3];
function permutaciones(n){
    const permutaciones=[];
    const permutado =(arr,permutacion=[])=>{
        if(!arr.length){
            permutaciones.push(permutacion)
            return
        }
        for(let i in arr){
            let curr=arr.slice()
            let next=curr.splice(i-1)
            permutado(curr,permutacion.concat(next))
        }
    }
    permutado(n);
    return permutaciones;
}
console.time();
permutaciones(n);
console.timeEnd();
console.log("Las permutaciones son: "+permutaciones(n));
console.log("Tiene una complejidad computacional cuadratica");