import express, { request, response } from "express"
import { memo } from "react";

const app = express()

app.use(express.json())

const user = []

//ROTAS

app.get("/users", (request, response)=>{
    return response.json(user)

});

app.post("/users", (request, response)=> {
    console.log(request)
    return response.json({ ok: true })
})

app.listen(3000)