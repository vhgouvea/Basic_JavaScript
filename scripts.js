
// Object
const person = {
    name: "Jhon",
    age: 39,
    weight: 88.6,
    isAdmin: true
}

console.log(person.name)
console.log(person.age)
console.log(person.weight)
console.log(person.isAdmin)

console.log(`${person.name} tem ${person.age} anos `)


//Array

const animals = ["Lion", "Monkey", "Cat", "Dog"]

console.log(animals)
console.log(animals.length)
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])


const bichos = [
    "leao",
    "Gato",
    {
        nome: "Cachorro doido",
        idade: 2
    }
]

console.log(bichos[2].nome)

//Transformando string em number e number em string

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

//Contando caracteres

let word = "Paralelepipedo"
console.log(word)
console.log(word.length)

let number2 = 1234
console.log(number2)
console.log(String(number).length)

//Transformar um numero quebrado e trocar ponto por vírgula
let number3 = 1234.1234
console.log(number3)
console.log(number3.toFixed(2).replace(".", ","))

//Transformar letras minúsculas em maiúsculas
let word2 = "Programar é muito bacana!"
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())

//Manipulando Strings e Arrays
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())

// Verificar se o texto contém uma palavra específica
let phrase2 = "Eu quero viver!"
console.log(phrase2.includes("Amor"))


// Criar array com construtor

let myArray2 = new Array("a", "b", "c")
console.log(myArray2)