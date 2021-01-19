//Usei o "express" para criar e configurar o servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/4062/4062906.svg?token=exp=1611096650~hmac=261fdccf2afcf7cd7676bd4eaa8a6772",
        title: "Cursos de Programação 1",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi iure, optio ex neque ullam",
        url: "http://google.com",
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/4062/4062906.svg?token=exp=1611096650~hmac=261fdccf2afcf7cd7676bd4eaa8a6772",
        title: "Cursos de Programação 2",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi iure, optio ex neque ullam",
        url: "http://google.com",
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/4062/4062906.svg?token=exp=1611096650~hmac=261fdccf2afcf7cd7676bd4eaa8a6772",
        title: "Cursos de Programação 3",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi iure, optio ex neque ullam",
        url: "http://google.com",
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/4062/4062906.svg?token=exp=1611096650~hmac=261fdccf2afcf7cd7676bd4eaa8a6772",
        title: "Cursos de Programação 4",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi iure, optio ex neque ullam",
        url: "http://google.com",
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/4062/4062906.svg?token=exp=1611096650~hmac=261fdccf2afcf7cd7676bd4eaa8a6772",
        title: "Cursos de Programação 5",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi iure, optio ex neque ullam",
        url: "http://google.com",
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/4062/4062906.svg?token=exp=1611096650~hmac=261fdccf2afcf7cd7676bd4eaa8a6772",
        title: "Cursos de Programação 6",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi iure, optio ex neque ullam",
        url: "http://google.com",
    },
]

//Configurando arquivos estaticos (css, script, imagens, etc)
server.use(express.static("public"))

//Configurando o Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//Criei uma rota
// e capturei o pedido do cliente para responder
server.get("/", function(req, res){
    const  reversedIdeas = [...ideas].reverse()
    let lastIdeas = []
    for(let idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }
    
    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideias", function(req, res){
    const  reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas: reversedIdeas})
})

//liguei o servidor na porta "3000"
server.listen(3000)