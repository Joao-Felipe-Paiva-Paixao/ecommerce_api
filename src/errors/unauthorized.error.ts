import { ErrorBase } from "./base.error";

export class UnauthorizedError extends ErrorBase {

    constructor(message = "E-mail ou senha incorretos") {
        super(401, message);
}

}