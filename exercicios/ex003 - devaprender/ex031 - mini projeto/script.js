function Postagem(titulo, mensagem, autor, visualizacoes, comentarios, estaAoVivo) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.visualizacoes = visualizacoes,
    this.comentarios = comentarios,
    this.autor = autor,
    this.estaAoVivo = true;
}

var post = Postagem("Lei Maria da Penha", "É uma lei que tentará ser derrubada daqui a alguns meses", "Carol Sardá", "200k", "Ótimo")

console.log(post)