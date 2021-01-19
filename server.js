//Usei o "express" para criar e configurar o servidor
const express = require("express")
const server = express()

//Configurando arquivos estaticos (css, script, imagens, etc)
server.use(express.static("public"))

//Configurando o Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
})

//Criei uma rota
// e capturei o pedido do cliente para responder
server.get("/", function(req, res){
    return res.render("index.html")
})

server.get("/ideias", function(req, res){
    return res.render("ideias.html")
})

//liguei o servidor na porta "3000"
server.listen(3000)