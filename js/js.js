// tamaño de libros shelf
var shelf_tamanyo_widht         = 84;
var shelf_tamanyo_height        = 102;
var shelf_tamanyo_widht_grande  = 95;
var shelf_tamanyo_height_grande = 116;


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
  // antes estaba en index
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
      decrementarImagen(actual_libro);
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

      // fade out slider_content       // cambiar el contenido (y fade in) dentro de la funcion fadeOut consigue que se haga todo en orden correcto

      // $(".slider_content").fadeOut();
      decrementarImagen(actual_libro);
      incrementarImagen(id);

      $('.slider_content').fadeOut("slow", function(){
        $('#path_img').html('<img src="'+libros[id].path_img+'">');
        $('#titulo').html(libros[id].titulo);
        $('#autor').html(libros[id].autor);
        $('#descripcion').html(libros[id].descripcion);
        $('#link_ebook').html('<a href="'+libros[id].link_ebook+'"><img src="img/button.jpg" width="107" height="37" alt="Cómpralo para eBook" /></a>');
        $('#link_comprar').html('<a class="button" href="'+libros[id].link_comprar+'">Club de Lectura</a>');
        
        ///////////
        // CAJAS //
        ///////////     
        // Posiciones en json => X en numero cajas[X]
          $('#caja_roja').html(libros[id].cajas[0].caja_roja.texto+'<a class="button_box1" href="'+libros[id].cajas[0].caja_roja.link_ver_mas+'" style="">Ver más</a>');
          $('#caja_azul').html(libros[id].cajas[1].caja_azul.texto+'<img style="margin:0 auto 0 auto" src="img/book_c1.jpg" width="87" height="110" /><a class="button_box2" href="'+libros[id].cajas[1].caja_azul.link_ver_mas+'" style="">Comprar</a>');
          $('#caja_lima').html(libros[id].cajas[2].caja_lima.texto+'<a class="button_box3" href="'+libros[id].cajas[2].caja_lima.link_ver_mas+'" style="">Ver más</a>');
          $('#caja_rosa').html(libros[id].cajas[3].caja_rosa.texto+'<a class="button_box1" href="'+libros[id].cajas[3].caja_rosa.link_ver_mas+'" style="">Ver más</a>');
          $('#caja_verde').html(libros[id].cajas[4].caja_verde.texto+'<a class="button_box2" href="'+libros[id].cajas[4].caja_verde.link_ver_mas+'" style="">Ver más</a>');
          // $('#caja_azul').html(libros[id].cajas[5].caja_azul.texto);   // seria la del lightbox
          
          // $('#caja_naranja').html('<div class="catalog"><ul><li><a href="img/materiales/thumb1_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li><li><a href="img/materiales/thumb2_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb2.jpg" width="48" height="49" /></a></li><li><a href="img/materiales/thumb1_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li><li><a href="img/materiales/thumb1_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li><li><a href="img/materiales/thumb1_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li><li><a href="img/materiales/thumb1_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li><li><a href="img/materiales/thumb1_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li><li><a href="img/materiales/thumb1_1024.jpg" class="html5lightbox" title="Prueba Thumbnail" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li></ul></div>');

 
      // fade in slider_content
      $(".slider_content").fadeIn();
          // var div = $("<div id='foo'>test2</div>").hide();
          // $(this).replaceWith(div);
          // $('#foo').fadeIn("slow");
  });
}

//incrementar tamaño de id
function incrementarImagen(id){
  $("#"+id).animate({ height: shelf_tamanyo_height_grande, width: shelf_tamanyo_widht_grande }, 300);
  // $("#"+id).css( "z-index" , "100" );
}
//tamaño de imagen a tamaño original
function decrementarImagen(id){
  $("#"+id).animate({ height: shelf_tamanyo_height, width: shelf_tamanyo_widht }, 150);
  // $("#"+id).css( "z-index" , "100" );
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
    // sumar 1 a posicion actual
    actual_index = actual_index +1;
    nuevo_libro = listaOrdenadaLibros[actual_index];

  }
  decrementarImagen(actual_libro);
  actual_libro = nuevo_libro;
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
    // restar 1 a posicion actual
    actual_index = actual_index -1;
    nuevo_libro = listaOrdenadaLibros[actual_index];

  }
  decrementarImagen(actual_libro);
  actual_libro = nuevo_libro;
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