//Ejemplo de callback

console.log("Inicio del programa");
//Declaramos la funcion setTimeout que tendra 
//internamente ontra funcion
setTimeout(function() {
    console.log('Primer timeout');
    //imprimimos un mensaje luego de 3 segundos
}, 3000);

setTimeout(function() {
    console.log('Segundo timeout');
}, 0);

setTimeout(function() {
    console.log('Tercer timeout');
}, 0);

console.log("Fin del programa");