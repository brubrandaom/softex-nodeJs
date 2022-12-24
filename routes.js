const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send(`Esta á a Home Page`)
})

app.get("/nome/:nome", (req, res) => {
    res.send(`Olá ${req.params.nome}!`)
})

app.get("/", (req, res) => {
    res.send(`Bem vindo, ${req.query.nome}`)
})

app.get("/redireciona", (req, res) => {
    res.redirect("/")
})

app.listen(8080, () => {
    console.log("SERVIDOR RODANDO")
})