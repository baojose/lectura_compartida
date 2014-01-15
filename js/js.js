var libro_landing = 'libro1'; // se podria hacer una funcion q lo buscase del json.js
var actual_libro = libro_landing;
var listaOrdenadaLibros = new Array();
listaOrdenadaLibros = ("libro1","libro2","libro3");


$(document).ready(function() {
  // console.log("jquery funcionando");

  //////////////
  // Tooltip  //
  //////////////
  // $(document).ready(function() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-punk'
    });
  // });


  // cargar los datos nada más llegar
  cargarDatosPrincipales(libro_landing);

  // TODO borrar el contenido de todas las variables json. Sino el anterior valor sobreescribe un valor vacio

  ///////////////////////////////////////////////////////////////////////////////////////////
  // Detectar cual libro del shelf ha sido clicado, cambiar el contenido de slider_content //
  ///////////////////////////////////////////////////////////////////////////////////////////
  $("#shelf img").click(function() {

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

    cargarDatosPrincipales(dummy_anteriorLibro());
  });
  $(".ws_next").click(function() {
    // console.log("boton ws_next clicado");

    cargarDatosPrincipales(dummy_siguinteLibro());
  });
  ////////////////////////////////////
  // DEBUG dentro de document.ready //
  ////////////////////////////////////

    // Para ver por consola valor del actual_libro al clicar cualquier parte d la pagina
    $("html").click(function(){
      console.log("debug 1d12d2r actual_libro  ["+actual_libro+"]");

    });
    ///////////////////////////// PARSEAR json.js

    //  alert(libros);
    // var json_obj = jQuery.parseJSON(libros);
    // console.log(json_obj);
    // var lista_libros = dummy_listaOrdenadaLibros(json_obj);
     // $.getJSON

    jQuery.each(libros, function() {
      console.log("My id is " + this + ".");
      return (this != "four"); // will stop running to skip "five"
    });
});

///////////////////////////////////////
// FUNCIONES fuera de document.ready //
///////////////////////////////////////

// function cargarDatosPrincipales
// carga los datos de slider_content correspondientes al id recibido leidos del json
// tb lanza fadeIn y fadeOut
function cargarDatosPrincipales(id){
  console.log("cargarDatosPrincipales id recibida=["+id+"]");

 // TODO arreglar fade in y fade out para que no se muestre el libro cliclado antes del fade in
  // links:
  // http://stackoverflow.com/questions/5248721/jquery-replacewith-fade-animate
  // http://stackoverflow.com/questions/10627049/jquery-fadein-change-content-and-fadeout-with-opacity

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
function dummy_siguinteLibro(){
  console.log("DUMMY actual_libro = "+actual_libro);

  return ("libro2");
}
function dummy_anteriorLibro(){
  console.log("DUMMY actual_libro = "+actual_libro);

  return ("libro1");
}
function dummy_listaOrdenadaLibros(){
  for (var i in libros)
      {
        console.log("i"+i);
      }
}
console.log(libros);