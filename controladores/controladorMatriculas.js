//Definiendo 5 estudiantes para matricular en globant
let estudianteUno={
    id:1,
    nombre:"Felipe",
    edad:30,
    pagoContado:false,
    cuotasPendientes:15,
    saldoDeuda:3000000
}
let estudianteDos={
    id:2,
    nombre:"Jaime",
    edad:18,
    pagoContado:false,
    cuotasPendientes:15,
    saldoDeuda:3000000
}
let estudianteTres={
    id:3,
    nombre:"Juan Esteban",
    edad:25,
    pagoContado:true,
    cuotasPendientes:0,
    saldoDeuda:0
}
let estudianteCuatro={
    id:4,
    nombre:"Sara restrepo",
    edad:26,
    pagoContado:false,
    cuotasPendientes:12,
    saldoDeuda:2500000
}
let estudianteCinco={
    id:5,
    nombre:"karen ramirez",
    edad:20,
    pagoContado:false,
    cuotasPendientes:10,
    saldoDeuda:2000000
}
let estudiantes= [estudianteUno,estudianteDos,estudianteTres,estudianteCuatro,estudianteCinco];

console.log(estudiantes);

//Cambiando el texto de cualquier etiqueta:
//1. Tener la referencia a la etiqueta
//let etiquetaTituloUno=document.getElementById('nombreUno');
//let etiquetaTituloDos= document.getElementById('nombreDos');
//2. utilizo la propiedad textContent para alterar el contenido de texto
//etiquetaTituloUno.textContent="Estudiante 1: "+estudiantes[0].nombre;

//Recorriendo un arreglo

//Referencia a la base o componente padre
let fila= document.getElementById("fila");

//Recorro el arreglo de datos y comienzo a generar etiquetas desde JS(traversing)
estudiantes.forEach(function(estudiante){
    //Solo puedo crear etiquetas reales de html
    let columna=document.createElement("div");
    columna.classList.add("col")

    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","h-100","shadow");

    let nombreDelEstudiante=document.createElement("h3");
    nombreDelEstudiante.classList.add("text-center","fuenteNombre");
    nombreDelEstudiante.textContent=estudiante.nombre;

    let edad=document.createElement("h4");
    edad.classList.add("text-center");
    edad.textContent="edad: "+estudiante.edad;

    let cuota=document.createElement("h4");
    cuota.classList.add("text-center","fuente");
    cuota.textContent="cuota: "+estudiante.cuotasPendientes;

    let saldoDeuda=document.createElement("h4")
    saldoDeuda.classList.add("text-center");
    saldoDeuda.textContent="Saldo deuda: "+estudiante.saldoDeuda;

    let logo= document.createElement("img")
    logo.classList.add("img-fluid","tamaño")
    logo.src="../imagenes/logo.png";
    

    //asocio los elementos creados al componente padre, siempre del mas interno al mas externo
    tarjeta.appendChild(nombreDelEstudiante);
    tarjeta.appendChild(edad);
    tarjeta.appendChild(cuota);
    tarjeta.appendChild(saldoDeuda);
    tarjeta.appendChild(logo)
    columna.appendChild(tarjeta);

    fila.appendChild(columna);

    
});