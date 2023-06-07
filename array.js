var frutas = ["manzana","platano","cereza","fresa"];

frutas.length

// para agregar frutas

var masFrutas = frutas.push("uvas");

var ultimo = frutas.pop("uvas") // pop siempre elimina el ultimo de la lista


var nuevaLongitud=frutas.unshift("salmon")//lleva al objeto al primer lugar de la lista

var borrarFruta = frutas.shift()//borra elemento de primera posicion

var indice = frutas.indexOf("Manzana")

//metodos

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre:"Teclado", costo:500},
    {nombre: "Audifonos", costo:1700},
];

var articulofiltrados= articulos.filter(function(x){return x.costo<=500});

var articulomappeados=articulos.map(function(x){returnx.nombre});

var encuentraArticulo=articulos.find(function(x){return x.nombre === "Laptop"}) //devueve el primer elemento que culpa la condicion

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){return articulo.costo<=700});//Solo devuelve true



function imprimirelemento(arr){
    console.log(arr[0])
}

function eachelememt(arr){
    for (element of arr){
        console.log(element)
    }
}

