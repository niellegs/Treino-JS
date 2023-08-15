const express = require("express");
const app = express();
const port = 3000;
// para visualizar o conteúdo da request "express.json()"
app.use(express.json());

app.get("/",  (req, res) => {
    res.send("Olá mundo")
})

app.post("/pessoa", (req, res) => {
    console.log(req.body)
    res.json({
        "statusCode": 200
    })
});

app.listen(port, () => console.log("API rodando"))