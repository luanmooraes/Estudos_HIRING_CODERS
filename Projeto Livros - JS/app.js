const livros = require('./database');

// Pegar um input de um usuario se ela deseja escolher um livro por categoria

const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

// Se for Sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
// Se não, mostra todos os livros em ordem crescente pela quantidade de paginas.

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log("Essas são as categorias disponiveis:")
    console.log("/Produtividade", "/História Brasileira", "/Américas", "/Estilo de vida", "/Tecnologia")

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter( livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}
else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses sao todos os livros disponiveis:")
    console.table(livrosOrdenados)
}