/* var miVar = 'Texto de miVar'

console.log(miVar)

miVar = 86

console.log(miVar)

var miVar = true

console.log(miVar) */

/* let miLet = 'Texto de miLet'

console.log(miLet)  

miLet = 86

console.log(miLet)

let miLet = true
console.log(miLet) */

/* const miConst = 'Texto de miConst'

console.log(miConst)

miConst = ['86']

console.log(miConst) */

/* var miVar = 'Texto de miVar'

function imprimirMiVar() {
    console.log('Imprimiendo miVar desde dentro de la funcion, el valor de miVar es: ', miVar)
}

imprimirMiVar()

console.log('Imprimiendo miVar desde fuera de la funcion, el valor de miVar es: ', miVar) */


/* let miLet = 'Texto de miLet'

function imprimirMiLet() {
    console.log('Imprimiendo miLet desde dentro de la funcion, el valor de miLet es: ', miLet)

    let miLet2 = null
    console.log('Imprimiendo miLet2 desde dentro de la funcion, el valor de miLet2 es: ', miLet2)

    if (miLet2) {
        let miLet3 = true
        
        console.log('imprimiendo miLet2 desde dentro del if, el valor de miLet3 es: ', miLet2)
        
        console.log('imprimiendo miLet3 desde dentro del if, el valor de miLet3 es: ', miLet3)

        var miVar2 = 'Texto de miVar'
    }

    // console.log('imprimiendo miLet3 desde dentro de la funcion, el valor de miLet3 es: ', miLet3)

    console.log('imprimiendo miVar2 desde dentro de la funcion, el valor de miVar2 es: ', miVar2)
}

imprimirMiLet()

console.log('Imprimiendo miLet desde fuera de la funcion, el valor de miLet es: ', miLet) */

// console.log('Imprimiendo miLet2 desde fuera de la funcion, el valor de miLet2 es: ', miLet2)


// const en este punto funciona igual que let




// OBJETOS

/* let vendedor =
{
    nombre: 'Carlos',
    apellido: 'Carles',
    empresa: 'Vendetuti S.A.',
    habilidadesBlandas: ['carisma', 'puntualidad'],
    vender: function () {
        return 'Carlos vendió un auto'
    }
    ,
    obtenerNombreCompleto: function () {
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor)

console.log('El tipo de daato de vendedor es:', typeof vendedor)

console.log(vendedor.nombre)

console.log(vendedor.habilidadesBlandas)

console.log(vendedor.habilidadesBlandas[1])

console.log(vendedor.vender())

vendedor.nombre = 'Juan'

console.log(vendedor)

vendedor.edad = 56

console.log(vendedor) */


// VALOR Y REFERENCIA: PRIMITIVOS VS NO PRIMITIVOS

/* let a = 10

let b = a

console.log('a: ', a, 'b: ', b)

a = 20

console.log('a: ', a, 'b: ', b)

console.log('************************')

let obj = {nombre: 'Carlos'}

let obj2 = obj

console.log('obj: ', obj, 'obj2: ', obj2)

obj2.nombre = 'Juan'

console.log('obj: ', obj, 'obj2: ', obj2) */

// Objetos dentro de Tempalates literales

let nombre = "Marta"

console.log(`El nombre es ${nombre}`)

let numero =  2

console.log("El numero es", numero)
console.log(`El numero es ${numero}`)

let obj= {edad: 35}

console.log(obj)
console.log(`El objeto es ${obj}`)
console.log("Mi objeto es:", obj)
console.log(`La edad del objeto es ${obj.edad}`)

console.log(`obj: ${JSON.stringify(obj)}`)

