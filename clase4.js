//DESAFIO N°1
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

//-------------------------------------------------------
//Respuesta propuesta por el profe

const myArray={
    size:0,
    values : [],

    push: function(element){
        this.values[this.size] = element;
        this.size++
    },

    pop: function(){
        if (this.size > 0){
            const aux = [];
            for (let i = 0; i < this.size - 1; i++){
                aux[i] = this.values[i]
            }
            this.values =aux;
            this.size--
        }
    }

}

myArray.push('firts')
console.log(myArray);
myArray.push('second')
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

//-------------------------------------
//Respuesta propuesta por el profe

const person1= {
    name: 'Juan',
    data: {
        age: 20,
        address: "calle falsa 123"
    }
}

const person2= {
    name: 'Juan',
    data: {
        age: 20,
        address: "calle falsa 123"
    }
}

console.log(compareObjects(person1, person2));

function compareObjects (obj1, obj2) {
    const obj1Keys = Object.keys(obj1); //Las key de obj1 las guarda en una variable.
    const obj2Keys = Object.keys(obj2); //Las key de obj2 las guarda en una variable.
    if (obj1Keys.length != obj2Keys.length) { //Si las key de obj1 y obj2 no son iguales, retorna false.
        return false;
    }
    for (const key of obj1Keys) { //Recorre las key de obj1 que son iguales a las key de obj2.
        const obj1Value = obj1[key]; //Guarda el valor de la key de obj1 en una variable.
        const obj2Value = obj2[key]; //Guarda el valor de la key de obj2 en una variable.
        if (obj1Value != null && obj2Value != null && typeof obj1Value == 'object' && typeof obj2Value == 'object') { //Si el valor de la key de obj1 y obj2 son objetos, llama a la funcion recursivamente.
            if(!compareObjects(obj1Value, obj2Value)) { //Si el valor de la key de obj1 y obj2 son objetos y no son iguales, retorna false.
                return false;
            }
        } else { 
            if (obj1Value !== obj2Value) //Si el valor de la key de obj1 y obj2 no son iguales, retorna false.
                return false;
            }  
            
    }

    
    return true
}