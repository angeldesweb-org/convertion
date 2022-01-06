import { codes } from './codes';

export class BaseError extends Error {
	constructor(code = 'c0', name, ...params) {
		super(...params);
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, BaseError);
		}
		this.message = codes[code];
		this.name = name;
		this.code = code;
		this.date = new Date();
	}
}
