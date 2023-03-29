function contarVogais(texto) {
    let cont = 0
    texto= texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {

        if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
            cont++
        }
    };
    return cont;
}
console.log(contarVogais(`teto`));