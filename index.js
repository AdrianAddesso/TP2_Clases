// Tipos de variables y Datos primitivos
var nombre = "Adrian";
let apellido;
console.log("🚀 ~ apellido:", apellido);
apellido = "Addesso";
console.log("🚀 ~ apellido:", typeof apellido);
const dni = 32660664;
let nombreCompleto = `${nombre} ${apellido} | DNI: ${dni}`;
console.log("🚀 ~ nombreCompleto:", nombreCompleto); // Comentario

// Objetos
let direccion = "calle 123" // para agrearle data fuera del objeto mediante esta variable
let objetoLiteral = {
    nombre: "Osvaldito",
    edad: 11,
    direccion
}
objetoLiteral.nombre
console.log("🚀 ~ objetoLiteral:", typeof objetoLiteral, objetoLiteral, objetoLiteral.nombre);

// Arrays
const arr = [3, [1, 2, 3], { nombre: "Carlos", apellido: "Herrera" }];
console.log("🚀 ~ arr:", typeof arr, arr, arr[3])


