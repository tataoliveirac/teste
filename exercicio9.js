/*function fatorial(num) {
    let cont = num;
    while (cont > 1) {
      num *= cont-1;
      cont--;
    }
    return num;
  }*/


function fatorial(num) {
  if (num == 1) {
    return 1
    
  }else {
    return num * fatorial(num-1)
  }
}

console.log(fatorial(5));


  