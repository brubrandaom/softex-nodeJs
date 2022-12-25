const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send(`Esta é uma requisição GET`)
})

app.post("/", (req, res) => {
    res.send(`Esta é uma requisição POST`)
})

app.put("/", (req, res) => {
    res.send(`Esta é uma requisição PUT`)
})

app.delete("/", (req, res) => {
    res.send(`Esta é uma requisição DELETE`)
})

app.listen(8080, () => {
    console.log("SERVIDOR RODANDO")
})