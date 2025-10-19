/*
1. String ->Texto
*/
const texto1 = "texto é com aspas 'duplas'"
const texto2 = 'com aspas "simples"'
const texto3 = `ou com crase e com essa opção vc pode pular linhas`//template literals ou template strings.

console.log(texto1)
console.log(texto2)
console.log(texto3)


const myage = 30
const mycar = "Ferrari"
const mystring = `Eu tenho ${myage} anos. E tenho uma ${mycar}`

console.log(mystring)

/*
2. Number
*/
const num1 = 10
const num2 = 20
const num3 = num1 + num2
console.log(num3)

/*
3. Boolean
true
false
*/

/*
4. Object
*/
const name = "Jeferson"
const age = 29
const address = "Rua projetada"

const jeferson = {
    name: "Jeferson",
    age: 29,
    address: {
        street: "Rua projetada",
        number: 0,
        city: "Porto Seguro",
        state: "BA",
        country: "Brasil",
    }
}

console.log(jeferson.address.city)

/*5.null ->Ausência de informação proposital
undefined ->Ausência de informção*/


/*Estrutura de Dados

1.Array-> É uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. Ele é muito útil para organizar e manipular coleções de dados. */



