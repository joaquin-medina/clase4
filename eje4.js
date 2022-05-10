/* Crear una función que reciba un número del 1 al 10 por parámetro. 
La función debe tener un loop que muestre todos los números del 1 al 10 excepto el número recibido. */


const showNum = (num) => {
    for (let i = 0; i <= 10; i++) {
        if (i === num){
            continue;
        }
    console.log(i);
    }
}


showNum(5);
