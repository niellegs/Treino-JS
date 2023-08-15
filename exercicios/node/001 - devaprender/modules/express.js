const express = require("express")

const app = express()

app.get('/home', (req, res) => {
    res.contentType("application/html")
    res.status(200).send("<h1>hello world</h1>")
})

const port = 8080
app.listen(port, "127.0.0.1", () => console.log(`Rodando express na porta ${port}`))

app.get("/users", (req, res) => {
    res.contentType("application/Json")
    
    const users = [
        {
            name: "John Doe",
            email: "John@doe.com"
        },
        {
            name: "Jane Doe",
            email: "Jane@doe.com"
        }
    ]

    res.status(200).send(users)
})