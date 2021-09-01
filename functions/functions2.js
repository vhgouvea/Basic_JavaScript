// Criar app de frases motivacionais

function createPhrases() {
    console.log("Estudar é muito bom!")
    console.log("Paciência e Persistência")
    console.log("Revisão é mãe do aprendizado")
}

//Executando a func
createPhrases();

console.log("Fim do Programa!")



// Func Anônima

//parâmetros da funcao
const sum = function (number1, number2) {
    total = number1 + number2
    return total
}

// argumentos
sum(10, 3) 

sum(15,15)

sum(12, 15)

let number1 = 34
let number2 = 25

sum(number1, number2)

console.log(`O número é ${number1}`)
console.log(`O número é ${number2}`)
console.log(`A soma é ${number1} + ${number2} = ${sum(number1, number2)}`)


// Function Scope

let subject

function createThink() {
    subject = 'study'
    return subject //função sem return é undefined
}


console.log(subject)
console.log(createThink())
console.log(createThink(subject))

//function hoisting

sayMyName();

function sayMyName() {
    console.log("Victor Hugo")
}

// Arrow Function

const sayMyName2 = (name) => {
    console.log(name)
}

sayMyName2("Victor Hugo");


// Callback Function
/*  Função que é passada dentro de outra função
     */

function sayMyName3(name) {
    console.log("Antes de executar uma callback")

    name()    

    console.log("Depois de executar uma callback")
}


sayMyName3(
    () => {
    console.log("Estou em um callback")
}
)
