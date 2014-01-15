var libro_landing = 'libro1'; // se podria hacer una funcion q lo buscase del json.js
var actual_libro = libro_landing;
var listaOrdenadaLibros = new Array("libro1","libro2","libro3");
// nombre ultimo libro
var listaOrdenadaLibros_ultimo = listaOrdenadaLibros[listaOrdenadaLibros.length-1];
// nombre primer libro
var listaOrdenadaLibros_primero = listaOrdenadaLibros[0];

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
      console.log("debug 1d12d2r actual_libro  ["+actual_libro+"] listaOrdenadaLibros_ultimo ["+listaOrdenadaLibros_ultimo+"] listaOrdenadaLibros_primero ["+listaOrdenadaLibros_primero+"]");

    });
    ///////////////////////////// PARSEAR json.js

    //  alert(libros);
    // var json_obj = jQuery.parseJSON(libros);
    // console.log(json_obj);
    // var lista_libros = dummy_listaOrdenadaLibros(json_obj);
     // $.getJSON

    // jQuery.each(libros, function() {
    //   console.log("My id is " + this + ".");
    //   return (this != "four"); // will stop running to skip "five"
    // });
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

      $('.slider_content').fadeOut("slow", function(){
        $('#path_img').html('<img src="'+libros[id].path_img+'">');
        $('#titulo').html(libros[id].titulo);
        $('#autor').html(libros[id].autor);
        $('#descripcion').html(libros[id].descripcion);
        $('#link_ebook').html('<a href="'+libros[id].link_ebook+'"><img src="img/button.jpg" width="107" height="37" alt="Cómpralo para eBook" /></a>');
        $('#link_comprar').html('<a class="button" href="'+libros[id].link_comprar+'">Comprar</a>');
        
      // fade in slider_content
      $(".slider_content").fadeIn();
          // var div = $("<div id='foo'>test2</div>").hide();
          // $(this).replaceWith(div);
          // $('#foo').fadeIn("slow");
      });




}

// Necesarias para las flechas del slider_content
function dummy_siguinteLibro(){
  nuevo_libro="";
  // es ultimo libro?
  if(actual_libro == listaOrdenadaLibros_ultimo){
    nuevo_libro = listaOrdenadaLibros_primero;
  }
  else{ // no lo es
    actual_index = listaOrdenadaLibros.indexOf(actual_libro);
    actual_index = actual_index +1;
    nuevo_libro = listaOrdenadaLibros[actual_index];

  }
  actual_libro = nuevo_libro;
  // sumar 1 a posicion actual
  return (nuevo_libro);
}

function dummy_anteriorLibro(){
  nuevo_libro="";
  // es ultimo libro?
  if(actual_libro == listaOrdenadaLibros_primero){
    nuevo_libro = listaOrdenadaLibros_ultimo;
  }
  else{ // no lo es
    actual_index = listaOrdenadaLibros.indexOf(actual_libro);
    actual_index = actual_index -1;
    nuevo_libro = listaOrdenadaLibros[actual_index];

  }
  actual_libro = nuevo_libro;
  // sumar 1 a posicion actual
  return (nuevo_libro);
}
// listaOrdenadaLibros 
// queria que se cargase dinamicamente, en vez de eso usa listaOrdenadaLibros
function dummy_listaOrdenadaLibros(){  // no se usa
  for (var i in libros)
      {
        console.log("i"+i);
      }
}
console.log(libros);