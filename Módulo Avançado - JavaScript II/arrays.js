// Acessar informações no array
const alunosGama = ['Paula', 'Célio', 'Amanda', 'Cristian'];
console.log(alunosGama[2]);

// Operador Spread 
const alunosXp = [...alunosGama, 'Luan', 'Moraes'];
console.log(alunosXp);

// Metodos de iteração

// Map
alunosXp.map(aluno => console.log(aluno))

// Filter 

const numeros = [35, 47, 13, 24, 15, 98, 55]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares);

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares);

// Sort

const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a);
console.log(numerosOrdenadosDecrescente);

// Reduce

const numbers = [1, 3, 5]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 5)
console.log(soma)
    