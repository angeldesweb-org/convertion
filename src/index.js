import { isNumber, isBinary, isHex, isOctal } from './validations';
import { convert } from './convertions';
import { BaseError } from './errors/error';

export const bin = (numero) => {
	return {
		isNumber: () => {
			return isNumber(numero);
		},
		isBinary: () => {
			if (typeof numero !== 'string') {
				return new BaseError('c10001', 'InputError');
			}
			if (!isNumber(numero)) {
				return new BaseError('c10002', 'InputError');
			}
			return isBinary(numero);
		},
		convert: () => convert(numero, 'bin', 2),
	};
};

export const oct = (numero) => {
	return {
		isNumber: () => {
			return isNumber(numero);
		},
		isOctal: () => {
			if (typeof numero !== 'string') {
				return new BaseError('c10001', 'InputError');
			}
			if (!isNumber(numero)) {
				return new BaseError('c10002', 'InputError');
			}
			return isOctal(numero);
		},
		convert: () => convert(numero, 'oct', 8),
	};
};

export const hex = (numero) => {
	return {
		isNumber: () => {
			return isNumber(numero);
		},
		isHex: () => {
			if (typeof numero !== 'string') {
				return new BaseError('c10001', 'InputError');
			}
			if (!isNumber(numero)) {
				return new BaseError('c10002', 'InputError');
			}
			return isHex(numero);
		},
	};
};

export const num = (numero) => {
	if (typeof numero !== 'number') return new BaseError('c10003', 'InputError');
	return {
		convert: () => convert(numero, 'dec', 10),
	};
};
