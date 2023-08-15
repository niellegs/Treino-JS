const filme = {
    titulo: "Vingadores",
    ano: 2018, 
    diretor: "Robin",
    personagem: "Thor",
}

function showProperties(movie) {
    for(let key in movie) {
        var prop = movie[key];
        var string = typeof movie[key] == "string"? console.log(prop) : "";
    }
}

showProperties(filme)