var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludar(listaestudiantes){
    console.log(`Hola, ${listaestudiantes}`);
}


for (var i=0; i<estudiantes.length;i++){
    saludar(estudiantes[i]);
}

for (var estudiante of estudiantes){
    saludar(estudiante)
}


//// while 

while (estudiantes.length >0){
    var estudiantes = estudiantes.shift();
    saludar(estudiantes);
}



// for a while
for (let i=10; i>=2; i--){
    console.log("El valor de i es: " + i);
}

i=10
while (i>=2){
    console.log("El vlor de i es: " + i);
    i--;
}

