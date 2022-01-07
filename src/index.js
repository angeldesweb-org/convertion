import { isNumber, isBinary, isHex, isOctal } from './validations';
import { convert } from './convertions';
import { BaseError } from './errors/error';
/**
 * @module Handlers
 * @description Los métodos isNumber, isBinary, isOctal, isHex y convert, retornados por estos métodos
 * no requieren parámetros, ya que estos métodos retornan referencia a esas funciones con
 * valores ya establecidos.
 * */

/**
 * @method bin
 * @description Manejador de expresiones binarias
 * @version 0.0.1
 * @param {string} exp Cadena de texto con representación numérica.
 * @returns {isNumber} [isNumber]{@link module:Validations} Éste return no requiere parámetros.
 * @returns {isBinary} [isBinary]{@link module:Validations} Éste return no requiere parámetros.
 * @returns {convert} [convert]{@link module:Main_Converter} Éste return no requiere parámetros.
 * @throws {InputError} Código 10001 si la expresión no es de tipo string. Método isBinary.
 * @throws {InputError} Código 10002 si la expresión es de tipo string, pero su conversión es NaN. Método isBinary.
 * @example
 * // bin isNumber
 * bin('1100').isNumber() // returns true
 * bin('Hello').isNumber() // returns false
 *
 * // bin.isBinary
 * bin('110011').isBinary() // returns true
 * bin('012340').isBinary() // returne false
 *
 * // bin.convert
 * // convert a su vez nos devuelve 3 métodos para el handler bin
 * // bin().convert().oct() //Nos convierte la expresión binaria a octal
 * // bin().convert().dec() //Nos convierte la expresión binaria a decimal
 * // bin().convert().hex() //Nos convierte la expresión binaria a hexadecimal
 *
 * // Ejemplo
 * bin('1010').convert().dec() // returns 10 (number)
 * bin('1010').convert().oct() // returns 12 (string)
 *
 */
export const bin = (exp) => {
	return {
		isNumber: () => {
			return isNumber(exp);
		},
		isBinary: () => {
			if (typeof exp !== 'string') {
				return new BaseError('c10001', 'InputError');
			}
			if (!isNumber(exp)) {
				return new BaseError('c10002', 'InputError');
			}
			return isBinary(exp);
		},
		convert: () => convert(exp, 'bin', 2),
	};
};
/**
 * @method oct
 * @description Manejador de expresiones octales
 * @version 0.0.1
 * @param {string} exp Cadena de texto con representación numérica.
 * @returns {isNumber} [isNumber]{@link module:Validations} Éste return no requiere parámetros.
 * @returns {isOctal} [isOctal]{@link module:Validations} Éste return no requiere parámetros.
 * @returns {convert} [convert]{@link module:Main_Converter} Éste return no requiere parámetros.
 * @throws {InputError} Código 10001 si la expresión no es de tipo string. Método isOctal.
 * @throws {InputError} Código 10002 si la expresión es de tipo string, pero su conversión es NaN. Método isOctal.
 * @example
 * // oct isNumber
 * oct('14').isNumber() // returns true
 * oct('Hello').isNumber() // returns false
 *
 * // oct.isOctal
 * oct('047').isOctal() // returns true
 * oct('9814').isOctal() // returne false
 *
 * // oct.convert
 * // convert a su vez nos devuelve 3 métodos para el handler oct
 * // oct().convert().bin() //Nos convierte la expresión octal a binaria
 * // oct().convert().dec() //Nos convierte la expresión octal a decimal
 * // oct().convert().hex() //Nos convierte la expresión octal a hexadecimal
 *
 * // Ejemplo
 * oct('12').convert().dec() // returns 10 (number)
 * oct('20').convert().hex() // returns 10 (string)
 *
 */
export const oct = (exp) => {
	return {
		isNumber: () => {
			return isNumber(exp);
		},
		isOctal: () => {
			if (typeof exp !== 'string') {
				return new BaseError('c10001', 'InputError');
			}
			if (!isNumber(exp)) {
				return new BaseError('c10002', 'InputError');
			}
			return isOctal(exp);
		},
		convert: () => convert(exp, 'oct', 8),
	};
};
/**
 * @method hex
 * @description Manejador de expresiones hexadecimales
 * @version 0.0.1
 * @param {string} exp Cadena de texto con representación numérica.
 * @returns {isNumber} [isNumber]{@link module:Validations} Éste return no requiere parámetros.
 * @returns {isHex} [isHex]{@link module:Validations} Éste return no requiere parámetros.
 * @returns {convert} [convert]{@link module:Main_Converter} Éste return no requiere parámetros.
 * @throws {InputError} Código 10001 si la expresión no es de tipo string. Método isHex.
 * @throws {InputError} Código 10002 si la expresión es de tipo string, pero su conversión es NaN. Método isHex.
 * @example
 * // hex isNumber
 * hex('1ff').isNumber() // returns true
 * hex('Hello').isNumber() // returns false
 *
 * // hex.isHex
 * hex('10f').isHex() // returns true
 * hex('hi').isHex() // returne false
 *
 * // hex.convert
 * // convert a su vez nos devuelve 3 métodos para el handler hex
 * // hex().convert().bin() //Nos convierte la expresión hexadecimal a binaria
 * // hex().convert().oct() //Nos convierte la expresión hexadecimal a octal
 * // hex().convert().dec() //Nos convierte la expresión hexadecimal a decimal
 *
 * // Ejemplo
 * hex('f').convert().dec() // returns 15 (number)
 * hex('a').convert().bin() // returns 1010 (string)
 *
 */
export const hex = (exp) => {
	return {
		isNumber: () => {
			return isNumber(exp);
		},
		isHex: () => {
			if (typeof exp !== 'string') {
				return new BaseError('c10001', 'InputError');
			}
			if (!isNumber(exp)) {
				return new BaseError('c10002', 'InputError');
			}
			return isHex(exp);
		},
		convert: () => convert(exp, 'hex', 16),
	};
};
/**
 * @method hex
 * @description Manejador de expresiones numéricas
 * @version 0.0.1
 * @param {number} num Cadena de texto con representación numérica.
 * @returns {convert} [convert]{@link module:Main_Converter} Éste return no requiere parámetros.
 * @throws {InputError} Código 10003 si la expresión no es de tipo number.
 * @example
 * // num no devuelve los métodos isNumber ni otro tipo de validación
 * // ya que solo admite expresiones numéricas
 * // num.convert
 * // convert a su vez nos devuelve 3 métodos para el handler num
 * // num().convert().bin() //Nos convierte la expresión decimal a binaria
 * // num().convert().oct() //Nos convierte la expresión decimal a octal
 * // num().convert().hex() //Nos convierte la expresión decimal a hexadecimal
 *
 * // Ejemplo
 * num(10).convert().hex() // returns a (string)
 * num(10).convert().bin() // returns 1010 (string)
 *
 */
export const num = (numb) => {
	if (typeof numb !== 'number') return new BaseError('c10003', 'InputError');
	return {
		convert: () => convert(numb, 'dec', 10),
	};
};

export { isNumber, isBinary, isOctal, isHex, convert };
