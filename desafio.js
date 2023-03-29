function listaCompras(itens, item) {
    let lista = ["banana", "abacaxi"]
    switch (itens) {
        case `adicionar`:
            console.log(lista.push);
            lista.push(item)
            break;
        case `remover`:
            console.log(lista.pop);
            removed = lista.pop()
            break;
        case `remover por posicao`:
            console.log(lista.splice);
            removed = lista.splice(1,1)
            break;

        default:
            console.log("erro");
            break;

    }
    return lista;
}
console.log(listaCompras('adicionar', 'melancia'))




