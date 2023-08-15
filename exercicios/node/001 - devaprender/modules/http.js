const http = require("http")

const port = 1337;

const server = http.createServer((req, res) => {
    if(req.url == "/home") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('<h1>Home Page</h1>')
    }

    if(req.url == "/users") {
        res.writeHead(200, {"Content-Type": "application/Json"})
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

        res.end(JSON.stringify(users))
    }
})

server.listen(port, "127.0.0.1", ()=> console.log(`Rodando na porta ${port}`))