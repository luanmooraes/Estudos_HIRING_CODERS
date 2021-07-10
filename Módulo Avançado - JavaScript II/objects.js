// Criando um objeto
const pessoa = {
    nome: "Luan",
    idade: 24,
    cidade: "Sobral"
}

// Notação de ponto
console.log(pessoa.nome);

// Notação de colchetes
console.log(pessoa['idade']);

// Como desestrututrar objetos
const {nome, idade, cidade} = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);