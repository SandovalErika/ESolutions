// DESAFIO N°2

// Se pide crear una TRIVIA. Par esto, se enumeran a continuación una serie de pasos que pueden ayudarles en el armado del ejercicio.

// 1.	Creen una clase Pregunta, con su constructor para describir una pregunta. Una pregunta debe incluir:
//a) la pregunta en sí
//b) las respuestas de las cuales el jugador puede elegir la correcta (elijan una estructura de datos adecuada)
//c) la respuesta correcta

// 2.	Creen unas cinco preguntas usando el constructor.

// 3.	Guárdenlas todas dentro de un array.

// 4.	Seleccionen una pregunta aleatoria y regístrenla en la consola, junto con las posibles respuestas (cada pregunta debe tener un número) (Sugerencia: escriban un método para los objetos Pregunta para esta tarea).

// 5.	Usen la función 'prompt' para pedirle al usuario la respuesta correcta.

// 6.	El usuario debe ingresar el número de la respuesta correcta.

// 7.	Verifiquen si la respuesta es correcta e impriman en la consola si la respuesta es correcta o no (Sugerencia: escriban otro método para esto).

// 8.	Supongan que este código sería un complemento para que otros programadores lo usen. Entonces, asegúrense de que todo el código sea privado y no interfiera con el código de otros programadores.

// 9.	Después de mostrar el resultado, muestran la siguiente pregunta aleatoria (que no sea una pregunta ya mostrada, escriban una función para esto y llámenla justo después de mostrar el resultado) El juego termina cuando se han mostrado todas las preguntas del array.
// 10.	Hagan un seguimiento de la puntuación del usuario para que el juego sea más divertido. Cada vez que una respuesta sea correcta, agregue 1 punto a la puntuación

// 11.	Mostrar la puntuación final en la consola. Usen otro método más para esto.

class Pregunta {
    constructor(pregunta, respuestas, correcta){
        this.pregunta = pregunta;
        this.respuestas = respuestas;
        this.correcta = correcta;
        this.puntaje = 0;
    }

    mostrarPregunta(){
        console.log(this.pregunta);
    }

    mostrarRespuestas(){
        for (let i = 0; i < this.respuestas.length; i++){
            console.log(`${this.respuestas[i].id} ${this.respuestas[i].rta}`);
        }
    }

    mostrarPreguntaConSusRespuestas(){
        this.mostrarPregunta();
        this.mostrarRespuestas();
    }

    set respuestaIngresada(numero){
        
        console.log('Ingresaste el numero ' + numero);
        if (this.correcta.id == numero){
            console.log('La respuesta es correcta');
            if ('La respuesta es correcta'){
                this.puntaje += 1;
            }
        } else{
            console.log('La respuesta es incorrecta');
        }
        
    }

    mostrarPuntaje(){
        console.log(`GANASTE ${this.puntaje} PUNTO!!!`);
    }
}

const preguntas = [
    new Pregunta('¿Cual es la capital de Argentina?', [{id: 1, rta: 'Buenos Aires'}, {id: 2, rta:'Córdoba'}, {id:3, rta:'Rosario'}, {id:4, rta:'La Plata'}], {id: 1, rta:'Buenos Aires'}),
    new Pregunta('¿Cuanto es 2 + 7?', [{id:1, rta: 9}, {id:2, rta: 7}, {id:3, rta:3}, {id:4, rta:1}], {id:1, rta:9}),
    new Pregunta('¿Que significa "dog" en ingles?', [{id:1, rta:'Gato'}, {id:2, rta:'Paloma'}, {id:3, rta:'Perro'}, {id:4, rta:'Pez'}], {id:3, rta:'Perro'}),
    new Pregunta('¿De que color es el sol?', [{id:1, rta:'Rojo'}, {id:2, rta:'Verde'}, {id:3, rta:'Amarillo'}, {id:4, rta:'Negro'}], {id:3, rta:'Amarillo'}),
    new Pregunta('¿Cuanto es 5 * 7?', [{id:1, rta:35}, {id:2, rta:40}, {id:3, rta:50}, {id:4, rta:25}], {id:1, rta:35})
    
]

function mostrarPreguntaAleatoria(){

    for(let i = 0; i < preguntas.length; i++){
        preguntas[i].mostrarPreguntaConSusRespuestas();
        try{
            preguntas[i].respuestaIngresada = prompt('Ingrese el numero de la respuesta correcta');
            
        } catch(error){
            console.log(error.name);
        }
        preguntas[i].mostrarPuntaje();
    }
}


console.log('Bienvenido a la trivia');
console.log(mostrarPreguntaAleatoria());
console.log('El juego ha terminado');
