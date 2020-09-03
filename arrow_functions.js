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

//situação alternativa 2: função com 1+ argumento
//função tradicional com 1+ argumentos
let imc =function(peso, altura){
    return peso/(altura ** 2)
}

console.log(imc(87,1.78))

//arrow function com 1+argumento
//os parênteses dos argumentos são obrigatórios quando o número de argumentos é maior q 1
let imc2=(peso, altura) => peso/(altura ** 2)

console.log(imc2(87, 1.78))

//conclusão: os parênteses só podem ser omitidos da lista de argumentos de uma arrow
//function quando há UM e APENAS UM argumento.

//situação alternativa 3: funções com mais de uma linha no corpo

//função tradicional
//5!=5*4*3*2*1 (120)

let fatorial=function(n){
    let res=1
    for(let i=n; i >1; i--){
        res*=i
    }
    return res
}

//arrow function com corpo maior que uma linha
//não há como fazer otimizações quanto ao corpo da função
let fatorial2= n => {
    let res=1
    for(let i=n; i>1; i--){
        res *=i
    }
    return res
}
console.log(fatorial(5))
console.log(fatorial2(5))