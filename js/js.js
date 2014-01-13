$(document).ready(function() {
  // console.log("jquery funcionando");
  
  // Parsear json.js
  
  alert(libros);
  // var json_obj = jQuery.parseJSON(libros);
  // console.log(json_obj);
  // var lista_libros = dummy_listaOrdenadaLibros(json_obj);
   // $.getJSON

jQuery.each(libros, function() {
  console.log("My id is " + this + ".");
  return (this != "four"); // will stop running to skip "five"
});

  var libro_landing = 'libro1'; // se podria hacer una funcion q lo buscase del json.js
  // cargar la imagen landing
  cargarDatosPrincipales(libro_landing);
  var actual_libro = libro_landing;

  // TODO borrar el contenido de todas las variables json. Sino el anterior valor sobreescribe un valor vacio
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  // Detectar cual libro del shelf ha sido clicado, cambiar el contenido de slider_content //
  ///////////////////////////////////////////////////////////////////////////////////////////
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
 
      cargarDatosPrincipales(id);
  
    
    }
    console.log("El Libro del shelf clicado tiene ID=["+id+"]");
  });

  //////////////////////////////////////////////////////////
  // Las flechas para controlarsiguiente y anterior libro //
  //////////////////////////////////////////////////////////
  $(".ws_prev").click(function() {
    // console.log("boton ws_prev clicado");
    
    cargarDatosPrincipales(dummy_anteriorLibro(actual_libro));
  });
  $(".ws_next").click(function() {
    // console.log("boton ws_next clicado");
    
    cargarDatosPrincipales(dummy_siguinteLibro(actual_libro));
  });
});

// function cargarDatosPrincipales
// carga los datos de slider_content correspondientes al id recibido leidos del json 
// tb lanza fadeIn y fadeOut
function cargarDatosPrincipales(id){
  console.log("cargarDatosPrincipales libro=["+id+"]");

      // fade out slider_content       // hacerlo dentro provoca que la primera carga tb tenga efecto fade
      $(".slider_content").fadeOut();   


  $('#path_img').html('<img src="'+libros[id].path_img+'">');
  $('#titulo').html(libros[id].titulo);
  $('#autor').html(libros[id].autor);
  $('#descripcion').html(libros[id].descripcion);
  $('#link_ebook').html('<a href="'+libros[id].link_ebook+'"><img src="img/button.jpg" width="107" height="37" alt="Cómpralo para eBook" /></a>');
  $('#link_comprar').html('<a class="button" href="'+libros[id].link_comprar+'">Comprar</a>');


      // fade in slider_content
      $(".slider_content").fadeIn();  
}

// FUNCIONES TODO
// Necesarias para las flechas del slider_content
// numeroTotalLibros
// listaOrdenadaLibros
function dummy_siguinteLibro(actual_libro){
  console.log("actual_libro = "+actual_libro);

  return ("libro2");
}

function dummy_anteriorLibro(){
  return ("libro2");
}
function dummy_listaOrdenadaLibros(json_obj){
  for (var i in json_obj) 
            {
              console.log("i"+i);
            }
}