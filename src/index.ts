import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) =>{
    res.send("Teste_Olá mundo")
});

app.get("/users", (req: Request, res: Response) => {
    let usuarios = [{
        nome: "Jorge",
        idade: "17",
    }, {
        nome: "Bibi",
        idade: "18",
    }];


    res.send (usuarios);
});

app.listen(3000, () =>{
    console.log("Servidor ativo");
});