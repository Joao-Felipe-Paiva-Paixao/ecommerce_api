import { ErrorBase } from "./base.error.js";

export class ValidatonError extends ErrorBase {
    constructor (message: string) {
        super(400, message)
    };
};