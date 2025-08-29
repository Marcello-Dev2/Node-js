import express from "express"

const app = express()

//ROTAS
app.get("/users", function (request, response) {
     console.log(request.query)
    response.send("Mercelo")
    
})
app.listen(3001, () => {
    console.log("Meu servidor tá rodando uhuiuu")
})