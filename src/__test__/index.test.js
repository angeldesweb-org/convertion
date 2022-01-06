const { num, bin, oct, hex } = require('../index');
const { describe, expect } = require('@jest/globals');

describe('Conversión de decimal a diferentes bases', () => {
	it('Decimal a binario', () => {
		expect(num(10).convert().bin()).toBe('1010');
	});
	it('Decimal a octal', () => {
		expect(num(10).convert().oct()).toBe('12');
	});
	it('Decimal a hexadecimal', () => {
		expect(num(31).convert().hex()).toBe('1f');
	});
});

describe('Conversión de binario a diferentes bases', () => {
	it('Binario a octal', () => {
		expect(bin('1111').convert().oct()).toBe('17');
	});
	it('Binario a decimal', () => {
		expect(bin('1010').convert().dec()).toBe(10);
	});
	it('Binario a hexadecimal', () => {
		expect(bin('1010').convert().hex()).toBe('a');
	});
});

describe('Conversión de octal a diferentes bases', () => {
	it('Octal a binario', () => {
		expect(oct('12').convert().bin()).toBe('1010');
	});
	it('Octal a decimal', () => {
		expect(oct('10').convert().dec()).toBe(8);
	});
	it('Octal a hexadecimal', () => {
		expect(oct('20').convert().hex()).toBe('10');
	});
});

describe('Conversión de hexadecimal a diferentes bases', () => {
	it('Hexadecimal a binario', () => {
		expect(hex('a').convert().bin()).toBe('1010');
	});
	it('Hexadecimal a octal', () => {
		expect(hex('10').convert().dec()).toBe('20');
	});
	it('Octal a decimal', () => {
		expect(hex('f').convert().hex()).toBe(16);
	});
});
