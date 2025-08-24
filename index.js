import express from "express";
import mongoose from "mongoose";

const app = express()

app.use(express.json())

const users = []

//rotas

app.get("/users", (request, response) => {
    return response.json(users)
})

app.post("/users", (request, response) => {

    const name = request.body.name;
    const age = request.body.age;
    const nickName = request.body.nick;

    users.push({ name , age , nickName });

    return response.json({ name , age , nickName });
});


mongoose.connect
('mongodb+srv://Marcello:7zPjfLjvITB9OwCJ@cluster0.035pzka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(() => console.log("Banco de dados conectar"))
.catch(() => console.log("Deu erro"))

app.listen(3000);