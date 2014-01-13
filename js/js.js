$(document).ready(function() {
  // console.log("jquery funcionando");

  var libro_landing = 'libro1'; // se podria hacer una funcion q lo buscase del json.js
  // cargar la imagen landing
  cargarDatosPrincipales(libro_landing);
  var actual_libro = libro_landing;

  // TODO borrar el contenido de todas las variables json. Sino el anterior valor sobreescribe un valor vacio
  
  // Detectar cual libro del shelf ha sido clicado, cambiar el contenido de slider_content
  $("#shelf img").click(function() {
  // TODO arreglar fade in y fade out para que no se muestre el libro cliclado antes del fade in
  // links: 
  // http://stackoverflow.com/questions/5248721/jquery-replacewith-fade-animate
  // http://stackoverflow.com/questions/10627049/jquery-fadein-change-content-and-fadeout-with-opacity

    // detectar cual id ha sido clicado
    var id = $(this).attr('id');

    if (actual_libro != id){  // clicando algo ya clicado
      //console.log("repitiendo");

      actual_libro = id;
      // fade out slider_content
      $(".slider_content").fadeOut();    
      cargarDatosPrincipales(id);

      // fade in slider_content
      $(".slider_content").fadeIn();    
    
    }
    console.log("El Libro del shelf clicado tiene ID=["+id+"]");
  });
});

// function cargarDatosPrincipales
// carga los datos de slider_content correspondientes al id recibido leidos del json 
function cargarDatosPrincipales(id){
  console.log("cargarDatosPrincipales libro=["+id+"]");
  $('#path_img').html('<img src="'+libros[id].path_img+'">');
  $('#titulo').html(libros[id].titulo);
  $('#autor').html(libros[id].autor);
  $('#descripcion').html(libros[id].descripcion);
  $('#link_ebook').html('<a href="'+libros[id].link_ebook+'"><img src="img/button.jpg" width="107" height="37" alt="Cómpralo para eBook" /></a>');
  $('#link_comprar').html('<a class="button" href="'+libros[id].link_comprar+'">Comprar</a>');

}

// FUNCIONES TODO
// Necesarias para las flechas del slider_content
// numeroTotalLibros
// listaOrdenadaLibros