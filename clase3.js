//Consigna: Escribir una funcion que debuelva el tipo del argumento que recibe como parametro.
//Escribir una funcion que reciba como callback a la funcion anterior, la ejecute pasando un valor (con un tipo de dato primitivo), guarde su resultado en una variable y luego la muestre por consola.

function devolberTipoDeArgumento (argumento){
    return typeof argumento;
}

let asignarValorAlArgumento = () =>{
    let tipoDeArgumento = devolberTipoDeArgumento(5);
    console.log(tipoDeArgumento);
}
asignarValorAlArgumento();

//RESOLUCION CORRECTA DEL PROFE

const getType = value => typeof value

const showType = fun => {
    let type = fun(19);
    console.log(type);
}

showType(getType);