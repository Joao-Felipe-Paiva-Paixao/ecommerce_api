import express from "express";

const app = express();

app.get("/", (req, res) =>{
    res.send("Teste_Olá mundo")
});

app.listen(3000, () =>{
    console.log("Servidor ativo");
});