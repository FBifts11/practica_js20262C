// const array = ['HTML', 'CSS', 'JS']


/* const array = new Array(5)

array[0] = 'HTML'
array[1] = 'CSS'
array[2] = 'JS'

console.log(array)

console.log(array.length) */


/* const temasFront = ['HTML', 'CSS', 'JS']
const temasFront2 = ['HTML', 'CSS', 'JS']

console.log("son lo mismo?", temasFront == temasFront2)

let a = 3
let b = 3
console.log("son lo mismo?", a == b)

// Agrego un elemento....

temasFront[temasFront.length] = 'ANGULAR'

console.log(temasFront) */


//  METODOS DE ARRAYS

let frutas = ['Manzana', 'Pera', 'Banana', 'Naranja', ' Manzana', 'Naranja', 'Banana', 'Pera', ' Tomate']

//  FILTER
// Devuelve un nuevo array basado en el criterio que definimos
/* 
let filter = frutas.filter((param) => {
    return param === 'Manzana'
})

console.log(filter)

console.log(typeof filter)

console.log(Array.isArray(filter)) */

const temas = [
    { tema: 'HTML', materia: 'Frontend' },
    { tema: 'CSS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Backend' },
    { tema: 'Nodejs', materia: 'Backend' },
    { tema: 'MongoDB', materia: 'Backend' },
]

/* console.log(temas)

let temasFiltrados = temas.filter(param => param.materia == 'Backend')

console.log(temasFiltrados) */

// MAP

// devulve un nuevo array transformando cada elementod el array original como nosotros le indiquemos

let arrayManzanas = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana']
/*
let arrayNaranjas = arrayManzanas.map(param => {
    if (param == 'Manzana') {
        return 'Naranja'
    }
})

console.log(arrayManzanas)
console.log(arrayNaranjas) */

//  FILL
// Llena o reemplaza los elementos por lo que le indiquemos, utiliza el indice. El "desde" está incluido, el "hasta" NO esta incluido. MODIFICA EL ARRAY ORIGINAL

/* let resultadoFill = arrayManzanas.fill('Naranja', 2, 5)

console.log('arrayManzanas', arrayManzanas)

console.log('resultadoFill', resultadoFill)

console.log('arrayManzanas', arrayManzanas) */

//  FIND

//  busca y devuelve el primer elemento que encuentre del array

/* let resultadoFind =  frutas.find(param => param == 'Pera')
console.log(resultadoFind) */


// FINDINDEX

/* let resultadoFindIndex =  frutas.findIndex(param => param == 'Naranja')

console.log(resultadoFindIndex) */

// SOME
//  verifica si al menos un elemento coincide con lo que le paso, devuelve treu o false

/* let resultadoSome =  frutas.some(param => param == 'Ciruela')

console.log(resultadoSome) */


// EVERY verifica si TODOS coinciden

/* 
frutas = ['Manzana', 'Pera', 'Banana', 'Naranja', ' Manzana', 'Naranja', 'Banana', 'Pera', ' Tomate']
*/


// POP

// elimina el ultimo elemento del array y devuelve el ELEMENTO

/* console.log('Array de frutas antes del POP:', frutas)

let resultadoPop = frutas.pop()

console.log("Se eliminó el elemento", resultadoPop)

console.log('Array de frutas despues del POP:', frutas) */

// SHIFT
//  elimina el primer elemento del array y devuelve ese elemento

/* console.log('Array de frutas antes del shift:', frutas)

let resultadoshift = frutas.shift()

console.log("Se eliminó el elemento", resultadoshift)

console.log('Array de frutas despues del shift:', frutas) */

// PUSH
// argega un elemento al final y me devuelve la nueva longitud del array

/* frutas.push('Sandia')

console.log(frutas) */

//  UNSHIFT
// Agrega al principio

/* frutas.unshift('Pomelo')

console.log(frutas) */


// SPLICE
// Agrea, elimina o reemplaza elementos
// orden → indice, cantidad, elementos

/* let numeros = [1, 2, 3, 4, 5]

console.log(numeros)

numeros.splice(2,1)

console.log(numeros)

console.log('****************************')

numeros = [1, 2, 3, 4, 5]

numeros.splice(2, 0, 'melon', 'sandia')

console.log(numeros)

console.log('****************************')

numeros = [1, 2, 3, 4, 5]

numeros.splice(2, 2, 99, 100)
console.log(numeros)

console.log('****************************')


numeros = [1, 2, 3, 4, 5]
let numerosNuevos = numeros.splice(2, 2, 99, 100)
console.log(numerosNuevos) */


// SLICE
// Crear una copia del array segun los elementos que le indiquemos

/* let resultadoSlice = frutas.slice(2,5)

console.log(frutas)

console.log(resultadoSlice) */


//  FOREACH

// recorre y ejecuta funcion sobre cada elemento, puedo realizar operaciones sobre los elementos y ademas modificar el array original

// Para imprimr los elementos

/* frutas.forEach((fruta) => {
    console.log('ForEach', fruta)
}) */

// Recorro el array utilizando los tres parametros disponibles
// fruta: elemento
// indice: indice
// array: array completo

/* frutas.forEach((fruta, indice, array) => {
    // split("") convierte el nombre de la fruta en un array de letras
    // join("_") une nuevamente las letras en un string
    //  colocando un guion entre cada una

    let frutaSeparada = fruta.split("").join("_")

    console.log(
        `La fruta ${frutaSeparada} esta ubicada en el indice ${indice} ` + `de un array que contiene ${array.length} elementos`
    )
}) */


//  CONCAT

// console.log(frutas.concat(arrayManzanas))


//  SORT

const arrayNumeros = [3, 9, 8, 5, 7, 1, 4]

console.log(arrayNumeros.sort())

const arrayNumeros2 = [3, 9, 8, 5, 7, 1, 4, 10, 22, 30, 15]


console.log(arrayNumeros2.sort())

console.log(arrayNumeros2.sort((a, b) => a - b))
console.log(arrayNumeros2.sort((a, b) => b - a))