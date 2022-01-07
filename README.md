<style>
    @import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
 
.isa_info, .isa_success, .isa_warning, .isa_error {
margin: 10px 0px;
padding:12px;
}
.isa_info {
    color: #00529B;
    background-color: #BDE5F8;
}
</style>

# Convertion

Librería simple para conversiones de bases numéricas.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contenido

- [Descripción](#descripcion)
- [Instalacion](#instalación)
- [Guia de uso](#guia-de-uso)
  - [Handlers](#handlers)
    - [num](#handler-num)
    - [bin](#handler-bin)
    - [oct](#handler-oct)
    - [hex](#handler-hex)

---

## Descripción

Convertion es una pequeña librería en fase de desarrollo para conversión entre bases numéricas. De momento solo cubre conversiones entre bases binario, octal, decimal y hexadecimal. A medida de lo posible intentaré aportar mayor cantidad de métodos a esta librería, con el fin de que tenga un amplio rango de conversiones

---

## Instalación

Solo se necesita tener instalado **node.js** y **npm**

```sh
npm install convertion
```

---

## 🚀 Guia de uso

La manera mas simple de usar convertion es.

```js
import { bin, num } from 'convertion';

const binary = num(10).convert().bin(); // returns '1010'

const hexa = bin('1010').convert().dec(); // returns 10
```

<div class="isa_info">
    <i class="fa fa-info-circle"></i>
    ✋ ¿Te fijaste? A pesar de que el método num utiliza de convert el método bin para la conversión, bin para hacer la conversión a decimal utiliza de convert el método dec.
</div>

> Esto significa que los métodos que retorna convert no son los mismos handlers. [Saber más](docs/index.html)

---

## Handlers

Estos son los 3 principales métodos de convertion. puedes visitar la [documentación](doc/index.html) para conocer más.

---

### Handler num

Este manejador recibe como parámetros solo expresiones numérica `123, 0b123, etc` las cuales convertirá en una expresión decimal. Nos devuelve solo el método convert.

```js
// Ejemplo
let num = num(10).convert().hex();
console.log(num);
// returns a (string)

let num = num(10).convert().bin();
console.log(num);
// returns 1010 (string)
```

---

### Handler bin

Este manejador recibe como parámetros solo expresiones numéricas de tipo string y binario `'0b1100', '110011', etc.`
El Handler bin devuelve los validadores:

- isNumber(): que devuelve true en caso de ser un string numérico.
- isBinary() que devuelve true si la expresión sigue un patrón binario.

También devuelve el método convert que desde bin nos devuelve tres métodos:

- dec() Retorna la expresión convertida a decimal.
- oct() Retorna la expresión convertida a octal.
- hex() Retorna la expresión convertida a hexadecimal.

```js
// Ejemplos

let number = bin('1010').isNumber();
console.log(number);
//returns true

let number = bin('Hello').isBinary();
console.log(number);
//returns false

let bin = bin('1010').convert().hex();
console.log(bin);
// returns a (string)
```

[saber mas](docs/module-Handlers.html)

---

### Handler oct

Este manejador recibe como parámetros solo expresiones numéricas de tipo string y octal `'0o17', '752', etc.`
El Handler oct devuelve los validadores:

- isNumber(): que devuelve true en caso de ser un string numérico.
- isOctal() que devuelve true si la expresión sigue un patrón octal.

También devuelve el método convert que desde oct nos devuelve tres métodos:

- dec() Retorna la expresión convertida a decimal.
- bin() Retorna la expresión convertida a binario.
- hex() Retorna la expresión convertida a hexadecimal.

```js
// Ejemplos

let number = oct('77').isNumber();
console.log(number);
//returns true

let number = oct('Hello').isOctal();
console.log(number);
//returns false

let oct = oct('20').convert().hex();
console.log(oct);
// returns 10 (string)
```

[saber mas](docs/module-Handlers.html)

---

### Handler hex

Este manejador recibe como parámetros solo expresiones numéricas de tipo string y hexadecimal `'0x1ff', '12ff', etc.`
El Handler hex devuelve los validadores:

- isNumber(): que devuelve true en caso de ser un string numérico.
- ishHex() que devuelve true si la expresión sigue un patrón hexadecimal.

También devuelve el método convert que desde hex nos devuelve tres métodos:

- dec() Retorna la expresión convertida a decimal.
- bin() Retorna la expresión convertida a binario.
- oct() Retorna la expresión convertida a octal.

```js
// Ejemplos

let number = hex('77').isNumber();
console.log(number);
//returns true

let number = hex('Hello').isHex();
console.log(number);
//returns false

let hex = hex('a').convert().dec();
console.log(hex);
// returns 10 (number)
```

[saber mas](docs/module-Handlers.html)

---

## Contribuciones

De momento me encuentro trabajando por mi cuenta en este proyecto. Si deseas contribuir con gusto ajustamos una metodología y comenzamos a colaborarnos en equipo. Déjame un pull request o un correo a <angeldesweg@gmail.com>

---

## Autor

- **Ángel Zamora**

---

## Licencia

[MIT](http://https://github.com/angeldesweb-org/convertion/blob/master/LICENSE)

---

## Donaciones

Si deseas apoyarme para continuar desarrollando más librerías y mejorando las existentes puedes hacerlo por el siguiente link.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://paypal.me/angeldesweb)
