import { ErrorBase } from "./base.error";

export class ForbidenError extends ErrorBase {
    constructor(message = "Não autorizado") {
        super(403, message);
    }
}