$(document).ready(function() {
  console.log("jquery funcionando");

  // Detectar cual libro pequeño ha sido clicado, cambiar el contenido de slider_content
  $(".change_libros_peq").click(function() {
    // TODO falta detectar cual id ha sido presionado (ahora uso dummy_id)
    console.log("dentro de Libro pequeño clicado");
    var dummy_id="libro1"; // intentando usar variable en "path" json 
    $('#titulo').html(libros[dummy_id].titulo);
    $('#descripcion').html(libros[dummy_id].descripcion);
    $('#link_ebook').html(libros[dummy_id].link_ebook);
    $('#link_comprar').html(libros[dummy_id].link_comprar);
  });
});


var libros=
{
  "libro1": {
    "titulo": "El Francotirador Paciente",
    "descripcion": "La ciudad es un campo de batalla. Kla sdklfj skldjfasklda klfsd f",
    "link_ebook": "http://sljasljd.com",
    "link_comprar": "http://sljasljd.com",
    "path_foto2": "img/arturo_perez_reverte_el_francotirador_paciente.jpg",
    "array": [
      "valor1",
      "valor2",
      "valor3",
      "valor4",
      "valor5"
    ]
  },
  "libro2": {
    "titulo": "2222222222 SD asd FASDf sD fASDfas"
  }
}
