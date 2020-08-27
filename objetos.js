//Declaração de objeto vazio
let pessoa1= {} //método "moderno"
let pessoa2= new Object() //método "tradicional"

//Declarando e inicializando um objeto já com propriedades
// propriedades: atributo + valor
let pessoa3={
    nome: 'João das Couves',
    naturalidade: 'Franca/Sp',
    "data de nascimento": '1997-11-03', // colocar entre aspas pq tem espaço entre as palavras
    estudante: true
}

//Acessando uma propriedade de um objeto
//Atributo é uma única palavra> sintaxe do ponto para buscar o atributo
console.log(pessoa3.nome)
console.log(pessoa3.estudante)

//Acessando uma propriedade composta por várias palavras: sintaxe dos colchetes, mas tbm funciona para palavras sem espaçamento
console.log(pessoa3["data de nascimento"])

//Criando novas propriedades em um objeto
//basta atribuir o valor a um nome de atributo, seguindo a sintaxe apropriada
pessoa3.nacionalidade='portuguesa' //única palavra
pessoa3['registro de estrangeiro']= 1234567 //várias palavras

console.log(pessoa3)

//eliminando uma propriedade
delete pessoa3.estudante

console.log(pessoa3)

//como percorrer todas as propriedades de um objeto: for..in
for(let prop in pessoa3){
    console.log(prop)
}

//listando atributo e valor de um objeto usando for..in
for(let atrib in pessoa3){
    console.log(`Atributo:${atrib}; valor: ${pessoa3[atrib]}`)
}

