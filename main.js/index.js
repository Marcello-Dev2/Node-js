import express from "express"

const app = express()

//ROTAS
app.get("/users/:id", function (request, response) {
     console.log(request.params)
    response.send("Mercelo")
    
})
app.listen(3001, () => {
    console.log("Meu servidor tá rodando uhuiuu")
})