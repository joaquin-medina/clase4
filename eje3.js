/* Crear una función que reciba dos parámetros. Un número y un string (texto). 
Luego debe repetir ese string tantas veces como lo diga el número recibido */


const repeatString = (num, str) => {
    for (let i = 0; i < num; i++)
        console.log(str);
}


repeatString(5, "recibo, se la paso a Messi");
