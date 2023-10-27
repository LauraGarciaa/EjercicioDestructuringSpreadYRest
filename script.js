// 1 EJERCICIOS DESTRUCTURING
// 1.1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
// Extrae la empleada Ana con todos sus datos personales:
const [persona1,persona2,persona3,] = empleados
console.log(persona2)
// Extrae el email del empleado Luis --> Luis@gmail.com
console.log(persona1.email)

// 1.2
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
// Cambia el nombre de la propiedad “name” por “nombre
const { name:nombre } = pokemon
// Extrae el nombre del Pokemon
console.log(nombre)
// Extrae el tipo de Pokemon que es
const { type } = pokemon;
console.log(type)
// Extrae el movimiento “Tackle”
console.log(pokemon.moves[1])


// 2 EJERCICIO SPREAD/REST
// 2.1
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const mergearObjetos = {...pokemon, ...pikachu}
console.log(mergearObjetos)

// 2.2
// Escribe una función llamada sumAllNumbers que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumAllNumbers(...numbers){
    console.log(numbers) // [6,8,2,3,1]
    let sumaTotal = 0
    for (let i = 0; i < numbers.length; i++) {
        sumaTotal += +numbers[i]
    }
    console.log(sumaTotal)
    return sumaTotal;
}
sumAllNumbers(6, 8, 2, 3, 1);
sumAllNumbers(11, 3, 12);

// 2.3
// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
function addOnlyNums(...items){
  console.log(items)
  let sumaTotal = 0
  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] == 'number') {
        sumaTotal += +items[i]
    }
  }  
  console.log(sumaTotal)
  return sumaTotal
}
addOnlyNums(1, 'perro', 2, 4);
// 2.4
// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
function countTheArgs(...arguments){
    console.log('tamaño argumentos',arguments.length)
    return arguments.length
}
countTheArgs('gato', 'perro');
countTheArgs('gato', 'perro', 'pollo', 'oso');
// 2.5
// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays(array1, array2) {
    const concatenarArrays = [...array1, ...array2]
    console.log(concatenarArrays)
    return concatenarArrays;
}
combineTwoArrays( ['a','b','c'] , [1,2,3] )



