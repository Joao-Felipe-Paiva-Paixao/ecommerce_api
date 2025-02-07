import express,{Request, Response, NextFunction} from "express";
import { ValidatonError } from "../errors/validation.error";
import { InternalServerError } from "../errors/internal-server.error";
import { NotFoundError } from "../errors/not-found.error";

export const errorHandler = (app: express.Express) =>{
    app.use((error: Error,req: Request ,res: Response, next: NextFunction) => {
        if (error instanceof ValidatonError) {
            error.send(res);
        } else if (error instanceof NotFoundError) {
            error.send(res);
        } else {
            new InternalServerError().send(res);
        }
    });
};