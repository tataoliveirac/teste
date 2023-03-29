function numeroPrimo(num) {
    let primo = true
    if (num === 1) {
        return `O numero ${num} não é primo`

    } else if (num < 1) {
        return "numeros menores que 1 não são primos"
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                primo = false;
            }
        }
    }
    if (primo) {
        return `O numero ${num} é primo`
        
    }else{
        return `O numero ${num} não é primo`
        
    }
}


console.log(numeroPrimo(21));