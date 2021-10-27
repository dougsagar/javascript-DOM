
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ya fue construido!');

    const title = document.getElementById('title');
title.innerHTML = "Cursos";

const description = document.getElementById('description');
description.innerHTML = "Listado de Cursos";



// const items = document.getElementsByClassName('list-group-item');
// for (let index = 0; index < items.length; index++) {
//     let element = items[index];
//     console.log(element.textContent);  
// }


// const items = document.getElementsByTagName('li');
// for (var i = 0; i < items.length; i++) {
//     if (i % 2 == 0) {
//         let element = items[i];
//         element.style.background = '#f2f2f2';
//         console.log(element.textContent);
        
//     }
    
// }

/*Obteninedo elemnto por id con querySelector*/
const element = document.querySelector('#first-course'); 
console.log(element.textContent);

/* Obtiene elemento por id con querySelector
querySelector va a retornar el primero que cumpla con la regla, la busqueda se hace en form desendente */
 
// const element = document.querySelector('.list-group-item');
// console.log(element);


/* Obtiene elemento por class con querySelector
querySelector va a retornar el primero que cumpla con la regla, la busqueda se hace en form desendente */

// const element = document.querySelector('.list-group-item');


/* Ejemplo de document.querySelector('');
Esto indica que quiero obtener el primer elemento li, que se encuentre dentro de una lista, la posea una clase list-group y que esta lista se encuentre dentro de div.row */

/*Se puede obtener elementos mediante reglas de CSS
Quiero obtener el primer elemento <li> que se encuentre en una lista desordenada con clase "list-group" y que esta lista se encuentre dentro de  60 <div> con clase "row"*/

//  const element = document.querySelector('div.row > ul.list-group > li ' );
//  console.log(element);

/* Con el metodo querySelectoAll permite obtener todos los elementos descendientes de un nodo */

// const items = document.querySelectorAll('li:nth-child(odd)');
// for(let i = 0; i < items.length; i++){
//     let element = items[i];
//     element.style.background = '#f2f2f2';
//     // console.log(element.textContent);
// };


/*Obtener hijos*/

/* const list = document.querySelector('ul');
console.log(list.childElementCount); //cantidad de hijos, solo lectura
console.log(list.children);//Obtener listado de hijos
console.log(list.children);//Se puede iterar
console.log(list.firstElementChild.textContent); //Obtiene primer hijo
console.log(list.lastElementChild); //Obtiene el ultimo hijo
console.log(list.lastElementChild.innerHTML); //ya con los elementos hijos se pueden acceder ya sea para leerlos o midificarlos */

/*Obtener elementos hermanos*/

// const element = document.querySelector('div.row > ul.list-group > li ' );
// console.log(element.parentElement); //imprime elemento padre
// console.log(element.parentElement.parentElement); //imprime ancestro o abuelo
// console.log(element.nextElementSibling); //imprime hermano
// console.log(element.nextElementSibling.nextElementSibling); //imprime siguiente hermano

// const lastElement = document.getElementById('last-course');
// console.log(lastElement.previousElementSibling); //obtiene el antepenultimo 

/*Los nodos son los elementos mmas pequeños con los que se puede trabajar en el arbol genealogico*/

// const element = document.querySelector('li');
// console.log(element.childElementCount);
// console.log(element.childNodes);



// EVENTO CLICK AND DOUBLE CLICK

// const button = document.querySelector('.btn.btn-primary');
// console.log(button);

// button.addEventListener('click', function(ev) {
//     console.log('Hello World!');
// });

// button.addEventListener('dblclick',function(){console.log('Hola Mundos')});

/*Oculta y muestra texto de etiquetas, ejemplo del evento click*/

// button.addEventListener('click',function(e){
//     if (title.style.display != 'none') {
//         console.log(e);
//         title.style.display = 'none';
//         description.style.display = 'none';
//         // button.textContent = 'Mostrar';
//         e.target.textContent = 'Mostrar';
//         // this.textContent = 'Mostrar';
//     }else{
//         console.log(e);
//         title.style.display = 'block';
//         description.style.display = 'block';
//         // button.textContent = 'Ocultar';
//         e.target.textContent = 'Ocultar';
//         // this.textContent = 'Ocultar';
//     }
// });

/*Evento mouseenter, cambiando las clases del elemento*/

// button.addEventListener('mouseenter', function() {
//     this.className = 'btn btn-danger';
// });

// button.addEventListener('mouseout', function() {
//     this.className = 'btn btn-primary';
// });

/*Funcion setTimeout del objeto Window, recibe 2 argumnetos, el primero es una función(arrow function, anonima etc, el segundo argumento el tiempo en milisengudos que tiene que esperar una función para ser ejecutada)*/

// setTimeout(function() {
//     console.log('Hello World!');
// }, 3000);

// /*Tambien setTimeout se le puede pasar n cantidad de parametros ejemplo:*/

// setTimeout(function(p1, p2, p3) {
//     console.log('Hello World!');
//     console.log(p1);
//     console.log(p2);
//     console.log(p3);
// }, 3000, 'argumeto1', 'argumeto2', 'argumento3');


/*Eventos del Teclado. 
Ejemplo del evento keydown */

// const input = document.getElementById('input');
// console.log(input);
// addEventListener('keydown', function(e) {
//     // console.log('Tecla presionada: ');
//     // console.log(e);
//     console.log('Tecla presionada: ' + e.key + ' con un codigo ' + e.keyCode);
// });

/*Eventos Submit
El comportamineto predeterminado de un formulario es recargar la pagina una vez se envíe el form, en este ejemplo no tenemos ningun backend, por lo que para quitar este comportamiento por defecto se utiliza e.preventDefault(); para pode ver lo que enviamos a imprimir en la misma pagina
*/

// const form = document.getElementById('course-form');
// form.addEventListener('submit', function(e) {

//     e.preventDefault();
//     let title = document.getElementById('title-form').value;
//     let description = document.getElementById('description-form').value;
//     console.log(title);
//     console.log(description);
// });

/*Evento change */

const chkbox = document.getElementById('checkbox');
chkbox.addEventListener('change', function() {
    console.log('Elemento cambio');
});

/*Propagación de Elementos */

/* const element = document.querySelector('li');
const list = document.querySelector('ul');
const div_row = document.querySelector('.row');
const div_container = document.querySelector('.container');
const body = document.querySelector('body'); */

/* element.addEventListener('click', function() {

    console.log('Elemento!');
    
});

list.addEventListener('click', function() {

    console.log('Lista!');

});

div_row.addEventListener('click', function() {

    console.log('Div Row!');
    
});

div_container.addEventListener('click', function() {
    
    console.log('Div Container!');

});

body.addEventListener('click', function() {
    
    console.log('Body!');

}); */

// element.addEventListener('click', show_messages);
// list.addEventListener('click', show_messages);
// div_row.addEventListener('click', show_messages);
// div_container.addEventListener('click', show_messages);
// body.addEventListener('click', show_messages);

/* Mejora del codigo de arriba */


// for (let element of document.querySelectorAll('*')) {
//     element.addEventListener('click', show_messages); 
// }

// function show_messages(e){
//     console.log("Elemento actual :" + this.tagName);
//     console.log("Elemento disparo el evento :" + e.target.tagName); //El atributo target va a almacenar el elemento que disparó el evento. A difecencia de this la cual modifica su valor se gun el evento que se vaya a propagar
//     console.log('\n');
// };


/*Detener Propagación para que este no llegue hasta los ancestros
e.stopPropagation*/


/* Crear nuevos elementos */

const row = document.querySelector('.row');

const form = document.getElementById('course-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;
    // console.log(title);
    // console.log(description);
    // create_card_by_innerHTML(title, description);
    create_card(title, description);
});

/* function create_card_by_innerHTML(title, description) {
  let html = `<div class="col-sm-6 col-md-4">
  <div class="thumbnail">
    <div class="caption">
      <h3 id="title_card">${title}</h3>
      <p id="description_card">${description}</p>
      <p>
        <a href="#" class="btn btn-danger">Acción</a>
      </p>
    </div>
  </div>`;

  row.innerHTML += html;
}
 */

function create_card(title, description){

  let div = document.createElement('div');
  div.className = 'col-sm-6 col-md-4';

  let thumbnail = document.createElement('div');
  thumbnail.className = 'thumbnail';

  let caption = document.createElement('div');
  caption.className = 'caption';

  let h3 = document.createElement('h3');
  h3.textContent = title;

  let p1 = document.createElement('p');
  p1.textContent = description;

  let p2 = document.createElement('p');

  let a = document.createElement('a');
  a.className = 'btn btn-danger';
  a.textContent = 'Eliminar';

  p2.addEventListener('click', delete_card);

  p2.appendChild(a);

  caption.appendChild(h3);
  caption.appendChild(p1);
  caption.appendChild(p2);

  thumbnail.appendChild(caption);

  div.appendChild(thumbnail);

  row.appendChild(div);

};

function delete_card(e){
 /*  Para poder eliminar un elemento, se requiere 2 elemenetos, elemento padre y elemento a eliminar que debe ser un hijo al padre*/

 let ancestro = get_ancestor(e.target, 4);
 row.removeChild(ancestro);
};

function get_ancestor(ancestro, level){
  if (level == 0) {
    return ancestro;
  }

  level--;
  return get_ancestor(ancestro.parentElement, level);


};

});





