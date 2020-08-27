//expressão de função "tradicional"

//características desta função
// - um único argumento: n
// - seu corpo tem apenas uma linha de cód com return

let quadrado= function(n) {
    return n*n
}
//a função tradicional acima pode ser transformada em uma arrow function
// - desaparece a palavra function
// - o argumento não precisa de parenteses
// - após o argumento há a flecha [arrow] =>
// - as chaves e a palavra return são omitidos
let quadrado2= n => n*n

console.log(quadrado(6))
console.log(quadrado2(6))

//situaçao alternativa 1: função sem argumento

//retorna um número aleatório entre 0 e 99
let aleatorio = function(){
    //Math.random(): gera um número aleatório entre 0 e 1
    //Math.floor(): "corta fora" as casas decimais de um número
    return Math.floor(Math.random()*100)
}

console.log('----------------')
console.log(aleatorio())

//arrow function com 0 argumento
//- os parênteses vazios marcam o lugar do argumento (obrigatório)
let aleatorio2=() => Math.floor(Math.random()*1000)