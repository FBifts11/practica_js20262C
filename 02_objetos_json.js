let letras = {
    letra_a: "a",
    letras_b: "b"
}

/* let tres = 3

let cinco = 5

console.log(`La suma es ${tres} + ${cinco}`)

let letra_a = `Las vocales son A E 
I O U`

console.log(letra_a) */ 

let letra_a = "A"

console.log(letra_a)
console.log(letras)
console.log(typeof letras)

let stringi_letras = JSON.stringify(letras)

console.log(typeof stringi_letras)
console.log("Mi objeto stringifeado:", stringi_letras)

let parse_letras = JSON.parse(stringi_letras)

console.log(typeof parse_letras)
console.log(parse_letras)

