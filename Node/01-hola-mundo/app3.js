console.log( 'Inicio de programa' );


setTimeout(()=>{
    console.log('Primer Timeout')
}, 3000);

setTimeout(()=>{
    console.log('Segundo Timeout')
}, 0);

setTimeout(()=>{
    console.log('Tercer Timeout')
}, 0);

console.log('Fin de programa');

//El punto de este ejercicio fue mostrar que las funciones asincronas son NO BLOQUEANTES
//De esa forma, javascript procesa cada una de las peticiones asincronas y las asigna a un stack
//ese stack recien se ejecutara al momento en que todas las otras funciones no asincronas hayan terminado su ejecucion.

//El resultado fue que el primer clg y el ultimo se ejecutaron primero, luego los setTimeOut de 0 ms, y luego el de 3000 ms.