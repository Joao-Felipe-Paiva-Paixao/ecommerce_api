import { ErrorBase } from "./base.error.js";

export class ForbidenError extends ErrorBase {
    constructor(message = "Não autorizado") {
        super(403, message);
    }
}