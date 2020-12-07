//Funcion 
//Recive el parametro nombre la funcion
function saludar(nombre) {
    //declaramos una variable de tipo let
    //para que no afecte cuando usemos una variable similar 
    let mensaje = `Hola ${nombre}! Cómo estas?`;
    //usamos return para retornar algo
    return mensaje;
}
//Declaramos otra variable, para aqui usar la funcion que
//creamos anteriormente, y el parametro se llamara Ariel
let saludo = saludar('Ariel');

console.log(saludo);