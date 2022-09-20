let counter = 0 //Contador de tentativas

function verificaChute(chute) {
    const numero = +chute //Coloca o chute como positivo

    // Caso o jogador diga "Game Over" o jogo acaba e pode ser recomeçado
    if(chute == "Game over") {
        document.body.innerHTML = `
        <h2 class="game-over">GAME OVER</h2>
        <button id="reiniciar" class="btn-reiniciar">Jogar Novamente</button>
        `
    }

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div class="erro">ERRO: O valor não é numérico</div>'
        return
    }

    if (numeroExcedeLimite(numero)) {
        elementoChute.innerHTML += `<div class="erro">ERRO: O número deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    //Caso o jogador acerte o número
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="ganhou">Parabéns, você acertou!</h2>
            <h3 class="sub-texto">O número secreto era ${numeroSecreto}</h3>
            <button id="reiniciar" class="btn-reiniciar">Jogar Novamente</button>
        `
    //Caso o chute do jogador esteja válido mas incorreto
    } else if (numero > numeroSecreto) {
        if (counter == nivelDificuldade(dificuldade) - 1) {
            document.body.innerHTML = `
            <h2 class="game-over">GAME OVER</h2>
            <h3 class="sub-texto">Excedeu o número de tentativas</h3>
            <button id="reiniciar" class="btn-reiniciar">Jogar Novamente</button>
            `
        } else {
            counter++,
            elementoChute.innerHTML += `
            <div class="tentativas">Tentativas: ${counter}/${nivelDificuldade(dificuldade)}</div>
            <div>O número secreto é menor <ion-icon name="trending-down-outline"></ion-icon></div>
            `
        }
        //Caso o chute do jogador esteja válido mas incorreto
    } else {
        if (counter == nivelDificuldade(dificuldade) - 1) {
            document.body.innerHTML = `
            <h2 class="game-over">GAME OVER</h2>
            <h3 class="sub-texto">Excedeu o número de tentativas</h3>
            <button id="reiniciar" class="btn-reiniciar">Jogar Novamente</button>
            `
        } else {
            counter++,
            elementoChute.innerHTML += `
            <div class="tentativas">Tentativas: ${counter}/${nivelDificuldade(dificuldade)}</div>
            <div>O número secreto é maior <ion-icon name="trending-up-outline"></ion-icon></div>
            `
        }
    }
}

//Verifica se é ou não um número
function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

//Verifica se o chute está dentro do intervalo entre o menor e o maior valor
function numeroExcedeLimite(numero) {
    return numero > maiorValor || numero < menorValor
}

//Opção de reiniciar o jogo
document.body.addEventListener('click', e => {
    if(e.target.id =='reiniciar') {
        window.location.reload()
    }
})
