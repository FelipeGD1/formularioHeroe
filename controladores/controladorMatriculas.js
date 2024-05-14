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

estudiantes.forEach(function(estudiante){
    console.log(estudiante.nombre)
})