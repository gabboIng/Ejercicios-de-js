//++++++ 1 Introduccion al lenguaje JavaScript ++++++++

let mensaje = "Mensaje Generico";

console.log(mensaje);

let datos = prompt("Ingresa tus datos" ,"")

alert("Tus Datos Son ..." + datos)

if (datos !== null && datos.trim() !== "") {
    alert(`Tus datos son: ${datos}`);
} else {
    alert("No ingresaste ningún dato.");
}



// ----------2 Variables, expresiones y sentencias condiciones ----------

let numero1 = parseFloat(  prompt ("Ingresa un numero"))
const numero2 = parseFloat(prompt("Ingresa otro numero"))
let eligeOperacion = prompt("Elige la operacion(+,-,*/): ")

let result ;

switch(eligeOperacion){
    case "+":
        result = numero1 + numero2;
        break;
    case "-":
        result = numero1 - numero2;
        break;
    case "*":
        result = numero1 * numero2;
        break;
    case "/":
        if(numero2 !==0){
            result = numero1 / numero2; 
        }else{
            result ="Error no se puede dividir por 0"
        }
        break;
    default:
        result = "Operacion invalida";
}

alert(`El resultado es :  ${result}`);

//<---------- 3 Arreglos y Ciclos ---------->

let numCualquieras = [];

for (let i = 0 ; i< 16 ; i++){
    let x = Math.floor(Math.random()*100) +1 ;
    numCualquieras.push(x)

}
console.log("Arreglo creado " + numCualquieras)

function ordenamientoBurbuja (arr){
   let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arregloOrdenado = ordenamientoBurbuja(numCualquieras);

console.log("Arreglo Ordenado : " + arregloOrdenado)

// <----------- 4 Funciones en JavaScript ------------> 

let numer1 = parseFloat(  prompt ("Ingresa un numero"))
let numer2 = parseFloat(prompt("Ingresa otro numero"))


function OperacionesMatematicas (n1 ,n2){
    let rsuma = suma(numer1,numer2)
    console.log("Esto es una suma  "  , rsuma);

    let rresta = resta(numer1,numer2)
    console.log("Esto es una resta" , rresta)

    let rmulti = multiplicacion(numer1,numer2)
    console.log("Esto es una multiplicacion" , rmulti)

    let rdiv = divi(numer1,numer2)
    console.log("Esto es una division" , rdiv , "Resultodado redondeado" ,Math.round(rdiv))
}

function suma (a,b){
    return a + b
}

function resta (a,b){
    return a-b;
}

function multiplicacion (a,b){
    return a*b
}
function divi (a,b){
    return a/b;
}

OperacionesMatematicas(numer1,numer2)

// <----------- 5 Conceptos basicos de objetos en JavaScript -----------> 

let producto = {
    nombre : "Moto",
    precio : 999,
    enStock : true,
    cantidad : 7,
    mInfo : function(){
        return `Metodo dentro del objeto Producto: ${this.nombre}, Precio: $${this.precio} , Se encuentra en stock${this.enStock} cantidad : ${this.cantidad} `;
    }
}

console.log(producto) 
function mostrarInfo (producto){
    return `Producto : ${producto.nombre} , Valor : ${producto.precio}, Se encuentra en stock :$ ${producto.enStock}, cantidad : ${producto.cantidad}`
}

console.log(mostrarInfo(producto))

let inventario = [
    {nombre:"Moto", precio:20 , cantidad :22},
    {nombre:"Auto", precio:230 , cantidad :232},
    {nombre:"Camion", precio:120 , cantidad :122}
];
console.log("--------- Recorriendo Objero con ForEach-----------")
inventario.forEach((i) => {
    console.log(`Producto: ${i.nombre} | Precio: $${i.precio} | Stock: ${i.cantidad} unidades`)
})

console.log("--------- Recorriendo Objero con map-----------")
let preciosDescuento = inventario.map(t => ({
    ...t, 
    precio : t.precio * 0.80
}));

console.log("Precios con descuento del 20 % :", preciosDescuento);