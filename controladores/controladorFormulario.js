//scope de las variables de JS
//almacenando una etiqueta html en una variable de js
let productPrizeBox=document.getElementById('prize');
let productDescriptionBox=document.getElementById('Description');
let productPhotoBox=document.getElementById('Photo');
let productReviewBox=document.getElementById('Review');
let productBrandBox=document.getElementById('Brand');
let productOpcionBox=document.getElementById('optionID');
let productButtonBox= document.getElementById('button');

//Como detecto un evento en js
//Una vez tenga una variable que almacena la etiqueta sobre la cual quiero escuchar el evento, entonces se utiliza
//La funcion o metodo (perro guardian)
productButtonBox.addEventListener("click",function(evento){
    evento.preventDefault();
    //Logica que deseo activar si el evento se detecto con exito 
    console.log("Acaban de darle click al formulario");
});

