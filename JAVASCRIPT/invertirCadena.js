function invertirCadena(cadena) {
    let caracteres = cadena.split('');
    let caracteresInvertidos = caracteres.reverse();
    let cadenaInvertida = caracteresInvertidos.join('');
    return cadenaInvertida;
}

// Ejemplo
let textoOriginal = 'Indira Baeza Albear';
let textoInvertido = invertirCadena(textoOriginal);
console.log(textoInvertido);  // salida "raeblA azeaB aridnI"
