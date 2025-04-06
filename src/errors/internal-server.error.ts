import { Response } from "express";
import { ErrorBase } from "./base.error.js";

export class InternalServerError extends ErrorBase {
    send(res: Response<any, Record<string, any>>) {
        throw new Error("Method not implemented.");
    }
    constructor(message = "Erro Interno do Servidor") {
        super(500, message);
    };
};