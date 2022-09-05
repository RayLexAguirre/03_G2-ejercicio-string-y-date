![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Colorful yet aggressive fish. I’m working on a project to photograph Bettas and this is 2nd one I shoot.
<span>Photo by <a href="https://unsplash.com/@kyawthutun?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kyaw Tun</a> on <a href="https://unsplash.com/s/photos/life?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

# Ejercicio: String y Date
El objetivo de este ejercicio es introducir algunos de los métodos más utilizados de las clases String y Date de javascript
## Requerimientos funcionales

1. (36 Puntos) Programar la clase `Student`. Deberá incluir los siguientes:
   - Atributos
     - `String name` nombre o nombres
     - `String fistLastName` apellido paterno
     - `String secondLastName` apellido materno
     - `Date birthDate`
     - `String email`
   - Métodos
     - (12 puntos) `constructor()` recibe valores iniciales para `name`, `firstLastName`, `secondLastName`, `birthDate` y `email`.
     - (12 puntos) `getFullName()` regresa el nombre completo del estudiante, es decir, el nombre y sus apellidos.
     - (12 puntos) `getInitials()` regresa las letras iniciales del nombre, en mayúsculas. Por ejemplo si el nombre completo es Juan Pérez Zamora, la función regresa  JPZ
     - (12 puntos) `getFullNameCapitalized()` regresa el nombre completo del estudiante pero solo la primer letra del nombre y apellidos son mayúsculas, las demás son minúsculas. Por ejemplo: Juan Pérez Díaz.
     - (13 puntos) `getAge()` regresa la edad del estudiante
     - (13 puntos) `getDayOfBirth()` regresa el día en la semana en el que nació, por ejemplo, Lunes, Martes, Miércoles.
     - (13 puntos) `getBirthDateFormatted()` regresa la fecha de nacimiento con el siguiente formato `Viernes 5 de Febrero de 2021`
     - (13 puntos)  `isValidEmail()` regresa `true` si el correo es válido o `false` si no lo es. Para que un correo sea válido `nombre@dominio`, el `nombre` deberá tener 1 extensión de 1 o más caracteres, deberá tener una `@` dividiendo nombre y dominio, y  el dominio deberá ser `ucol.mx`.
  
## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
