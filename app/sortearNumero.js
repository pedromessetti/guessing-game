const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumero()

//Gera número aleatório entre o menor valor e o maior valor
function gerarNumero() {
    return parseInt(Math.random()*maiorValor+1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

console.log(`O número secreto é ${numeroSecreto}`)
