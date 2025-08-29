import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";

const app = express()

app.use(express.json())

const users = []

//rotas

app.get("/users", (request, response) => {
    return response.json(users)
})

app.post("/users", async (request, response) => {
    const user = request.body

    const newUser= await User.create(user)


    return response.json(newUser);
});


mongoose.connect
    ('mongodb+srv://Marcello:7zPjfLjvITB9OwCJ@cluster0.035pzka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    .then(() => console.log("Banco de dados conectar"))
    .catch(() => console.log("Deu erro"))

app.listen(3000);