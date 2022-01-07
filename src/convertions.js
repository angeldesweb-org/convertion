/**
 * @module Main_Converter
 */
/**
 * Método de conversión a binario
 * @typedef {function} bin
 */
/**
 * Método de conversión a octal
 * @typedef {function} oct
 */
/**
 * Método de conversión a decimal
 * @typedef {function} dec
 */
/**
 * Método de conversión a hexadecimal
 * @typedef {function} hex
 */

import { BaseError } from './errors/error';

/**
 * @method convert
 * @description Función principal de conversiones.
 * @version 0.0.1
 * @param {string} exp Expresión numérica.
 * @param {string} bas Base de la expresión, solo acepta: 'bin', 'oct', 'dec' y 'hex'.
 * @param {number} bn Base numérica de la expresión.
 * @returns {bin} Convierte a binario.
 * @returns {oct} Convierte a octal.
 * @returns {dex} Convierte a decimal.
 * @returns {hex} Convierte a hexadecimal.
 * @throws {ExpressionError} Código 10004 Si el argumento 'bas' es diferente a los propuestos.
 * @example
 * //Conversión de decimal a binario
 * convert(10,'dec',10).bin() //return '1010'
 * //Conversión de binario a octal
 * convert('1010','bin',2).oct() //return '12'
 */
export const convert = (exp, bas, bn) => {
	let bases = ['bin', 'oct', 'dec', 'hex'];
	let valid = bases.indexOf(bas);
	if (valid === -1) throw new BaseError('c10004', 'ExpressionError');
	let number = parseInt(exp, bn);
	const functions = [
		{
			bin: () => {
				return number.toString(2);
			},
		},
		{
			oct: () => {
				return number.toString(8);
			},
		},
		{
			dec: () => {
				return number;
			},
		},
		{
			hex: () => {
				return number.toString(16);
			},
		},
	];
	const toOut = {};
	const filtered = functions.filter((obj) => Object.keys(obj)[0] !== bas);
	filtered.map((obj) => Object.assign(toOut, obj));
	return toOut;
};
