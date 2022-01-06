export const convert = (exp, bas, bn) => {
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
