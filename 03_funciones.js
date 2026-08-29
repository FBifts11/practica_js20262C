//FUNCIONES

let numero = 10;
function sumar(num) {
    return num +2
}

sumar(numero)

let resultado = sumar(numero)

console.log(resultado) 


console.log(`Sumo desde sumar, el resultado es ${sumar(numero)}`)

let sumarConArrow = (num) => {
    return num +2
}

console.log(`Sumo desde sumar, el resultado es ${sumarConArrow(numero)}`)

let sumarConArrowPower = num => num +2;

console.log(`Sumo desde sumar, el resultado es ${sumarConArrowPower(numero)}`)



//CALLBACKS


function saludar(param1) {
    console.log(`Hola ${param1}`)
};

let nombre = 'Pedro'

saludar(nombre);


function procesarSaludo(param2, callback) {
    console.log(`La funcion 'procesarSaludo' recibió como argumentos a ${param2} y a la función 'saludar' como callback, pues bien, saludemos entonces a ${param2} utilizando la callback: `)
    callback(param2);
};

procesarSaludo(nombre, saludar);



/* 
    La asincronía en JavaScript permite ejecutar tareas que toman tiempo (como esperar una respuesta del servidor o un temporizador) sin bloquear el flujo principal del programa. En lugar de detenerse, el código sigue ejecutándose y la tarea asincrónica se resuelve más adelante, cuando esté lista. Por ejemplo, setTimeout es una función asincrónica que programa la ejecución de una función después de cierto tiempo: el código continúa corriendo, y cuando el temporizador se cumple, la función se ejecuta en segundo plano, sin haber interrumpido el resto del programa. Es como poner una alarma y seguir trabajando hasta que suene.

    Y por que está tan fuertemente relacionado con los callbacks?

    Porque en JavaScript, la asincronía necesita una forma de decir “cuando termines, hacé esto”, y esa forma son los callbacks.

    Y Qué era un callback?
    Un callback es una función que se pasa como argumento a otra función, para que se ejecute después de que algo ocurra. En asincronía, ese “algo” suele ser una espera, una respuesta, o un evento.

*/


let numero1 = 2

function potenciar(num1) {
    numero1 = num1 ** 2
    return numero1
}

function operar(num2, num3, callback) {
    let numero2 = num3 ** 3;

    setTimeout(callback, 3000, num2);

    console.log(`Numero1 vale ${numero1} y aún no se ejecutó el callback, entonces el resultado es ${numero1 + numero2}`)

    setTimeout(() => {
        console.log(`Numero1 vale ${numero1} y ya se ejecutó el callback, entonces el resultado es ${numero1 + numero2}`)
    }, 5000);
}

operar(5, 3, potenciar)