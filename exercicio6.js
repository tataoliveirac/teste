function invertido(num) {
    let inverso = 0;
    while(num != 0)
    {
        inverso = inverso * 10;
        inverso = inverso + num % 10;
        num = Math.trunc(num/10); 
    }
    return inverso;
}

console.log(invertido(123));

