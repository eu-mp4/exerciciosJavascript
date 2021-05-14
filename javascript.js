function myConcat(separador) {
    var result = ""; // inicializa a lista
    // itera por meio de argumentos
    for (var i = 1; i < arguments.length; i++) {
       result += arguments[i] + separador;
    }
    console.log(result);
 }

 myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");