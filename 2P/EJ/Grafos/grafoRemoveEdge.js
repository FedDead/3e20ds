class graph {   //  Clase para construir el grafo
    constructor(o) {
        this.m=o;
    }

    addvertex(v){   //  Metodo para agregar vertices
        this.m[v]=0;
    }

    addedge(e,f){   //  Metodo para agregar aristas
        if(typeof (this.m[e])==='number'){
            this.m[e]=[]
        }
        this.m[e][f]=1
    }
    removeedge(e,f){    //  Metodo para remover aristar
        this.m[e][f]=0
    }

    fill(){ //Metodo para rellenar la matriz
        for (let i = 0; i < this.m.length; i++){
            for (let j = 0;j < this.m.length; j++){
                if (this.m[i][j] === undefined)
                    this.m[i][j] = 0
            }
        }
    }

    tostring(){ // Metodo para mostrar el grafo
        let s='\n';
        for (let i = 0;i < this.m.length; i++){
            s += '\n'
            for (let j = 0; j < this.m.length; j++){
                s += this.m[i][j]+' '
            }
        }
        return s;
    }

    print(){    //Metodo para pintar la variable s
        console.log(this.tostring())
    }
}
class graphSample{
    aNew(){
        return [];
    }
}   //Clase de un grafo simple

let s = new graphSample()       //Creamos nuestro grafo simple
let a = new graph(s.aNew());    //Creamos nuestro grafo en base al simple

a.addvertex(0); //Agregamos vertices a nuestro grafo
a.addvertex(1);
a.addvertex(2);

a.addedge(0,1); //Agregamos arista a nuestro grafo
a.addedge(1,2);
a.addedge(2,0);

console.log("Grafo:");

a.fill();
a.print();

console.log("\nGrafo con la arista removida:");

a.removeedge(0,1);
a.print();


