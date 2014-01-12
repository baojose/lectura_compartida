$(document).ready(function() {
  // TODO cargar la imagen landing
  console.log("jquery funcionando");
  // TODO borrar el contenido de todas las variables json. Sino el anterior valor sobreescribe un valor vacio
  
  // Detectar cual libro pequeño ha sido clicado, cambiar el contenido de slider_content
  $(".change_libros_peq img").click(function() {
    // detectar cual id ha sido clicado
    var id = $(this).attr('id');
    console.log("dentro de Libro pequeño clicado has clickado ID=["+id+"]");

    $('#path_foto').html('<img src="'+libros[id].path_foto+'">');
    $('#titulo').html(libros[id].titulo);
    $('#descripcion').html(libros[id].descripcion);
    $('#link_ebook').html('<a href="'+libros[id].link_ebook+'">link_ebook</a>');
    $('#link_comprar').html('<a href="'+libros[id].link_comprar+'">link_comprar</a>');
    // $('#link_comprar').html(libros[id].link_comprar);
  });
});



