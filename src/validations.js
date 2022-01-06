export const isNumber = (number) => {
	if (typeof number === 'string' && number !== '') {
		let num = Number(number);
		return !Number.isNaN(num);
	} else if (typeof number === 'number') {
		return true;
	} else {
		return false;
	}
};

export const isBinary = (number) => {
	const pattern = /^0b[0-1]+$|^[0-1]+$/;
	let valid = pattern.test(number);
	return valid;
};

export const isOctal = (number) => {
	const pattern = /^0o?[0-7]+$|^[0-7]+$/;
	let valid = pattern.test(number);
	return valid;
};

export const isHex = (number) => {
	const pattern = /^0x?[0-9A-F]+$|^[0-9A-F]+$/i;
	let valid = pattern.test(number);
	return valid;
};
