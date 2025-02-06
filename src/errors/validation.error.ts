import { ErrorBase } from "./base.error";

export class ValidatonError extends ErrorBase {
    constructor (message: string) {
        super(400, message)
    };
};