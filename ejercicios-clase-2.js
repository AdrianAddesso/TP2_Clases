// 1.  **Calculadora de Área de Rectángulo:**
//     - Declara dos variables, `ancho` y `alto`, con valores numéricos.
let ancho = 100;
let alto = 50;

//     - Calcula el área (ancho * alto) y guárdala en una constante `area`.
function calcular(a, b) {
  return a * b;
}

//     - Muestra el resultado en la consola.
const area = calcular(ancho, alto);
console.log("🚀 ~ area:", area);

// 2.  **Conversor de Temperatura:**
//     - Declara una variable `gradosCelsius` con un valor numérico.
let gradosCelsius = 50;
//     - Convierte los grados Celsius a Fahrenheit usando la fórmula: `(Celsius * 9/5) + 32`.
function convertir(a) {
  return (a * 9) / 5 + 32;
}
//     - Guarda el resultado en una variable `gradosFahrenheit` y muéstralo en consola.
let gradosFahrenheit = convertir(gradosCelsius);
console.log("🚀 ~ gradosFahrenheit:", gradosFahrenheit);

// 3.  **Verificador de Contraseña:**
//     - Declara una constante `contrasenaCorrecta` con un valor de tipo string.
const contrasenaCorrecta = "12345";
//     - Declara una variable `intentoDeUsuario` con otro valor.
let intentoDeUsuario = "lorem";
//     - Usa un operador de comparación para verificar si el intento es correcto y guarda el resultado (true/false) en una variable `esContrasenaValida`.
let esContrasenaValida = verificar(contrasenaCorrecta, intentoDeUsuario);

function verificar(a, b) {
  return a === b;
}
//     - Muestra el resultado en consola.
console.log("🚀 ~ esContrasenaValida:", esContrasenaValida);

// 4.  **Perfil de Usuario:**
//     - Crea un objeto `usuario` con las siguientes propiedades: `nombre` (string), `edad` (number), `estaRegistrado` (boolean), y `cursos` (un array de strings, ej: ["Node.js", "Git"]).

let usuario = {
  nombre: "Adrian",
  edad: 123,
  estaRegistrado: true,
  cursos: ["Node.js", "Git"],
  get getNombre() {
    return this.nombre;
  },
};
//     - Muestra en la consola el nombre del usuario y el primer curso de su lista.
console.log("🚀 ~ usuario:", usuario.getNombre, usuario.cursos[0]);

// 5.  **Evaluador de Acceso a Evento:**
//     - Declara una variable `edadPersona` con un valor numérico.
let edadPersona = 40;
//     - Declara una variable booleana `tieneTicket`.
let tieneTicket = true;
//     - Escribe una expresión lógica que sea `true` solo si la persona es mayor de 18 años **Y** tiene un ticket.
function esMayor(a, b) {
  return a >= 18 && b;
}

//     - Guarda el resultado en una variable `puedeAcceder` y muéstralo en consola.
let puedeAcceder = esMayor(edadPersona, tieneTicket);
console.log("🚀 ~ puedeAcceder:", puedeAcceder);
