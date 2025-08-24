import express from "express"

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

    users.push({ name, age, nickName});

    return response.json({ name, age , nickName });
});

app.listen(3000);