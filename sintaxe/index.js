const express = require("express")

const server = express()

//ROTAS
server.get("/abacate", (request, response) => {
    
    return response.send("Esse é seu abacate")
})

server.get("/morango", (request, response) => {
   
    return response.send("Esse é seu morango")
})

server.listen(3000)

