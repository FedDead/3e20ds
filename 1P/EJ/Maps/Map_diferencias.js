let weakmap=new WeakMap();
console.log("El map nos permite relacionar (mapear) unos valores con otros como si fuera un diccionario y un WeakMap solo acepta objetos como claves, la referencia a las claves es débil\n");
var key1={};
var key2={};
weakmap.set(key1,'hello');
weakmap.set(key2,{name:'paco'});
key1=null;
key2=null;
console.log(weakmap+"\n");
console.log("El  map y weakmap al igual que el set y weakset al quitar las referencias de los la keys en el weakmap los valores referencias dejan de existir y en el map no");
let map=new Map();
var key1={};
var key2={};
map.set(key1,'hello');
map.set(key2,{name:'paco'});
key1=null;
key2=null;
console.log(map);

