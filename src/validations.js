/**
 * @module Validations
 */
/**
 * Una expresión numérica ya sea un string '0x11aaff', '1234ff' o de tipo number.
 * @typedef {(number|string)} expression
 */
/**
 * @method isNumber
 * @description Valida si una expresión numérica es válida.
 * @version 0.0.1
 * @param {expression} exp Una expresión numérica de tipo string '1234', '0x12ff' o number.
 * @returns {boolean}
 * @example
 *
 * let numb = isNumber(13);
 * console.log(numb);
 * // returns true
 *
 * let numb = isNumber('0b1010');
 * // o
 * let numb = isNumber('110011');
 * console.log(numb);
 * // returns true
 *
 * let numb = isNumber('Hello');
 * console.log(numb);
 * // returns false
 */
export const isNumber = (exp) => {
	if (typeof exp === 'string' && exp !== '') {
		let n = Number(exp);
		return !Number.isNaN(n);
	} else if (typeof exp === 'number') {
		return true;
	} else {
		return false;
	}
};
/**
 * @method isBinary
 * @description Valida si la expresión puede ser usada como un binario.
 * @version 0.0.1
 * @param {string} n Cadena de texto con representación binaria: '110011' ó '0b11011'.
 * @returns {boolean}
 * @example
 *
 * let bin = isBinary('0b1010');
 * // o
 * let bin = isBinary('110011');
 * console.log(bin);
 * // returns true
 *
 * let bine = isBinary('Hello');
 * console.log(bin);
 * // returns false
 */
export const isBinary = (n) => {
	const pattern = /^0b[0-1]+$|^[0-1]+$/;
	let valid = pattern.test(n);
	return valid;
};
/**
 * @method isOctal
 * @description Valida si la expresión puede ser usada como un octal.
 * @version 0.0.1
 * @param {string} n Cadena de texto con representación octal: '01234567' ó '0o01234567'.
 * @returns {boolean}
 * @example
 *
 * let oct = isOctal('0o17');
 * // o
 * let oct = isOctal('735');
 * console.log(oct);
 * // returns true
 *
 * let oct = isOctal('Hello');
 * console.log(oct);
 * // returns false
 */
export const isOctal = (n) => {
	const pattern = /^0o?[0-7]+$|^[0-7]+$/;
	let valid = pattern.test(n);
	return valid;
};
/**
 * @method isHex
 * @description Valida si la expresión puede ser usada como un hexadecimal.
 * @version 0.0.1
 * @param {string} n Cadena de texto con representación hexadecimal: ^[0-9a-f] ó ^0x[0-9A-F].
 * @returns {boolean}
 * @example
 *
 * let hex = isHex('0x13FF');
 * // o
 * let hex = isHex('ff331');
 * console.log(hex);
 * // returns true
 *
 * let hex = isHex('Hello');
 * console.log(hex);
 * // returns false
 */
export const isHex = (n) => {
	const pattern = /^0x?[0-9A-F]+$|^[0-9A-F]+$/i;
	let valid = pattern.test(n);
	return valid;
};
