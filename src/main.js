//Conceptos Basicos 
let saludo = "hola"
console.log(saludo);
console.log("la longitud del saludo es", (saludo.length));
saludo = "Hola, bienvenidos al curso!";
console.log(saludo);
saludo.charAt(10); 
console.log("Para conocer la letra en al posicion 10 es:", (saludo.charAt(10)));
console.log("Para comprobar el final de un string:", (saludo.endsWith("curso!")));
console.log("Para comprobar la posicion de *al* es:", (saludo.indexOf("al")));
console.log("Para comprobar la ultima posicion en la que se encuentra la letra *o* es:", (saludo.lastIndexOf("o")));
saludo.replace("curso", "curso de POO");
console.log("Se realizo el remplazo del final del string:", saludo);
console.log("se extraera un parte del string del 0 al 5:", (saludo.slice(0, 5)));
console.log("Para dividir un string y convertirlo en parte de un array");
let r = saludo.split(" ");
console.log(r);

//Conceptos basicos de tiempo
let hoy = new Date();
console.log(hoy);
let fechaNac = new Date(1997, 1, 10);
console.log(fechaNac.getDay());
hoy = Date.now();
console.log(hoy);
hoy = new Date();
let dif = hoy - fechaNac
console.log(dif);
let ageDate = new Date(dif);
console.log(Math.abs(ageDate.getFullYear() - 1970));

import Student from "./student.js";
console.log("--------------------------------------------")
let juan = new Student("Juan", "perez", "diaz", new Date(1999, 2, 20), "juan@gmail.com");
console.log(juan.getInitials());
console.log(juan.getFullName());

let st01 = new Student("JuAn", "perEz", "dIaz", new Date(1999, 1, 10), "juan@gmail.com");
console.log(st01.getInitials());
console.log(st01.getFullNameCapitalized());
console.log(st01.getAge());
console.log(st01.getDayOfBirth());
console.log(st01.getBirthDateFormatted());
