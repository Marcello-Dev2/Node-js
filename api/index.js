import express, { request, response } from "express"
import { memo } from "react";

const app = express()

const user = []

//ROTAS

app.get("/users", (request, response)=>{
    return response.json({mensagem: "Deu certo"})
    
});

app.listen(3000)