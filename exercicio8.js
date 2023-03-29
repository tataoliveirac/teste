function montante(capital, juros, tempo) {
   const  formula = capital * (1 + juros) *tempo
   const total = formula.toFixed(2)
   return total
}

console.log(montante(12, 5/100, 3));

// M = C * (1+i)t