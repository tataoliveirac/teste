function caracter(frase, letra) {
    let resultado = 0
    frase = frase.toLowerCase()
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == letra) {
            resultado++
        }
    }
    return resultado
}

console.log(caracter(`arara`, 'a'));