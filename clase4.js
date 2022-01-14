//DESAFIO
//1- Cree un objeto que se comporte como un array que permite  operaciones push y pop en elementos.
//2- Escriba una funcion que se pueda usar para comparar profundamente dos objetos anidados.

//Ejercicio 1 

myArray = [
    {name: 'Juan', age: 20},
    {name: 'Pedro', age: 30},
    {name: 'Maria', age: 40},
    {name: 'Luis', age: 50},
]

myArray.push({name: 'Jorge', age: 60});

console.log(myArray);

myArray.pop();

console.log(myArray);

//Ejercicio 2

const obj1 = {
    prop1: 'valor1',
    prop2: 'valor2',
    prop3: {
        sub1: 'subvalor1',
        sub2: 'subvalor2'
    } 
}

const obj2 = {
    prop1: 'valor1',
    prop2: 'valor2',
    prop3: {
        sub1: 'subvalor1',
        sub2: 'subvalor2'
    } 
}

function areObjEquals (obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(areObjEquals(obj1, obj2));


