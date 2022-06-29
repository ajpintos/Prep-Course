// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< HEAD
const nuevaString = 'Holas';
=======
const nuevaString = 'Hola!';
>>>>>>> bb55f22a00b3404b49258a2b8cc8ae19985b5977

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
   return str
  
}

function suma(x=10, y=10) {
  // "x" e "y" son números
  let adicion = x+y;
  return adicion;
  
}

function resta(x=10, y=15) {
  // Resta "y" de "x" y devuelve el valor
  let resultado = x-y;
  // Tu código:
  return resultado;
  
}

function multiplica(x=10, y=2) {
  // Multiplica "x" por "y" y devuelve el valor
  let multi = x*y;
  // Tu código:
  return multi;
  
}

function divide(x=10, y=3) {
  // Divide "x" entre "y" y devuelve el valor
  let divide = x/y;
  // Tu código:
  return divide;
}

function sonIguales(x=10, y=11) {
  // Devuelve "true" si "x" e "y" son iguales
  if (x == y){
    return true;
}
    return false;
}
    
  // De lo contrario, devuelve "false"
  // Tu código:

function tienenMismaLongitud(str1="string1", str2="strig2") {
  // Devuelve "true" si las dos strings tienen la misma longitud
  if (str1.length == str2.length){
    return true;
}
    return false;
    }
  // De lo contrario, devuelve "false"
  // Tu código:

function menosQueNoventa(num=89) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  if(num < 90){
  return true;
  }
    return false;
  }
  // De lo contrario, devuelve "false"
  // Tu código:

function mayorQueCincuenta(num=151) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  if(num > 50){
    return true;
    }
      return false;
    }


function obtenerResto(x=10, y=5) {
  // Obten el resto de la división de "x" entre "y"
    let resultado = x%y;
  // Tu código:
    return resultado;
  
}

function esPar(num=6) {
  // Devuelve "true" si "num" es par
  let evaluate = num%2;
  if(evaluate == 0){
    return true; }
    return false;
    }
  // De lo contrario, devuelve "false"
  // Tu código:


function esImpar(num=7) {
  let evaluate2 = num%2;
  if(evaluate2 !== 0){
    return true; }
    return false;
    }


function elevarAlCuadrado(num=2) {
  // Devuelve el valor de "num" elevado al cuadrado
  let cuadrado = Math.pow(num,2);
  // ojo: No es raiz cuadrada!
  // Tu código:
  return cuadrado;
  
}

function elevarAlCubo(num=2) {
  let cubo = Math.pow(num,3);
  // ojo: No es raiz cuadrada!
  // Tu código:
  return cubo;
}

function elevar(num =10, exponent=5) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  let exponente = Math.pow(num,exponent)
  // Tu código:
  return exponente;
  
}

function redondearNumero(num=4.7) {
  // Redondea "num" al entero más próximo y devuélvelo
  let redondeo= Math.round(num)
  // Tu código:
  return redondeo;
}

function redondearHaciaArriba(num=10) {
  let redondeoUp= Math.ceil(num)
  // Tu código:
  return redondeoUp;
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  return Math.random();
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero=10) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero==0){
   return false;
  } else {
    if (numero>0){
    return 'Es positivo';
  }
   return 'Es negativo';
}
}


function agregarSimboloExclamacion(str) {
  let text = str + '!';
  return text
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  let NomComb = nombre + ' ' + apellido;
  return NomComb
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}

function obtenerSaludo(nombre='Martin') {
  return 'Hola ' + nombre + '!';
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  let area = alto * ancho;
  return area;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  return lado*4;
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  let areaTri = base * altura/2;
  return areaTri;
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  let exchange = euro * 1.2;
  return exchange;
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra='a'){
   //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(letra.length > 1) {
      return "Dato incorrecto";
    } else if(letra == 'a') {
      return 'Es vocal';
    } else if(letra == 'e'){
      return  'Es vocal';
    } else if(letra == 'i') {
      return 'Es vocal';
    } else if(letra == 'o') {
      return 'Es vocal';
    } else if(letra == 'u') {
      return 'Es vocal';
  } 
    return 'Dato incorrecto';
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
