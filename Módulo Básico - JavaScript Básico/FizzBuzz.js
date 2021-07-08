// FizzBuzz
// Divisível por 3 => 'Fizz'
// Divisivel por 5 => 'Buzz'
// DIvisivel por 3 e 5 => 'FizzBuzz'
// Se não for um número => 'Não é um número'
// Se nao for divisível nem por 3  e nem por 5 => Entrada

let resultado = fizzBuzz(100);
console.log(resultado);

function fizzBuzz (entrada) {
    if (typeof entrada !== 'number')
        return "Não é um numero";
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return "FizzBuzz";
    if(entrada % 3 === 0)
        return "Fizz";
    if(entrada % 5 === 0)
        return "Buzz";

    return entrada;
}


