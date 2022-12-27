const express = require ("express")
const app = express();

app.get('/consultar/:num', (req, res) => {
    var num = req.params.num;
    switch(num){
        case '10':
            res.status(200).send('Requisição bem sucedida.');
            break;
        case '20':
            res.status(500).send('O servidor não pode atender à solicitação devido a um problema inesperado.');
            break;
        case '30':
            res.status(300).send('A requisição tem mais de uma resposta possível.');
            break;
        case '50':
            res.status(404).send('O servidor não pode encontrar o recurso solicitado.');
            break;
        default:
            console.log('ERROR');
    }
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})