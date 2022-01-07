const { isNumber, isBinary, isOctal, isHex } = require('../validations');
const { describe, expect } = require('@jest/globals');

describe('Probando validación de expresiones numéricas', () => {
	it('Tipo number', () => {
		expect(isNumber(16)).toBe(true);
	});
	it('String numérico', () => {
		expect(isNumber('12345')).toBe(true);
	});
	it('String expresión numérica', () => {
		expect(isNumber('0b1111')).toBe(true);
	});
	it('String no numérico', () => {
		expect(isNumber('Hola')).toBe(false);
	});
});

describe('Probando validación de expresiones binaria', () => {
	it('String binario no expresivo', () => {
		expect(isBinary('110011')).toBe(true);
	});
	it('String expresivo', () => {
		expect(isBinary('0b110011')).toBe(true);
	});
	it('String no binario', () => {
		expect(isBinary('01230')).toBe(false);
	});
	it('String no numérico', () => {
		expect(isBinary('Hola')).toBe(false);
	});
});

describe('Probando validación de expresiones octales', () => {
	it('String octal no expresivo', () => {
		expect(isOctal('1234567')).toBe(true);
	});
	it('String expresivo', () => {
		expect(isOctal('0o735')).toBe(true);
	});
	it('String no octal', () => {
		expect(isOctal('01230987')).toBe(false);
	});
	it('String no numérico', () => {
		expect(isOctal('Hola')).toBe(false);
	});
});

describe('Probando validación de expresiones hexadecimales', () => {
	it('String hexadecimal no expresivo', () => {
		expect(isHex('11aF')).toBe(true);
	});
	it('String expresivo', () => {
		expect(isHex('0xaaff')).toBe(true);
	});
	it('String no hexadecimal', () => {
		expect(isHex('132ZQ')).toBe(false);
	});
	it('String no numérico', () => {
		expect(isHex('Hola')).toBe(false);
	});
});
