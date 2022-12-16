const express = require("express")
const app = express()

app.get("/cadastros", (req, res) => {
    res.send("Lista cadastros")
})

app.post("/cadastros", (req, res) => {
    res.send("Novo cadastro")
})

app.listen(8080, () => {
    console.log("SERVIDOR RODANDO")
})