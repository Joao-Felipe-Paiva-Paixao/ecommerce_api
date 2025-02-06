import express,{Request, Response, NextFunction} from "express";
import { ValidatonError } from "../errors/validation.error";
import { InternalServerError } from "../errors/internal-server.error";

export const errorHandler = (app: express.Express) =>{
    app.use((error: Error,req: Request ,res: Response, next: NextFunction) => {
        if (error instanceof ValidatonError) {
            error.send(res);
        }else {
            new InternalServerError().send(res);
        }
    });
};