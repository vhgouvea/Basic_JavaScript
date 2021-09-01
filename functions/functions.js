/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return `${this.name} está andando....`
    }
}

const vh = new Person("Victor Hugo") //funcao construtora
console.log(vh)


const teste = new Person("Victor Hugo")
const teste2 = new Person("Joao")
console.log(teste.walk())
console.log(teste2.walk())