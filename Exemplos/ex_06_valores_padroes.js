/// Valores padrões para functions
function soma(a = 3, b = 6){
    return a + b;
}
console.log(soma(1));
console.log(soma());

/// Valor padrão para Arrow Function
const soma2 = (a = 3, b = 6) => a + b;