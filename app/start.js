const startGame = document.getElementById('start')
const legenda = document.querySelector('.menor-maior')
const titulo = document.querySelector('.title')

jogar()

//Inicia o jogo ao clicar no botão "Jogar"
function jogar() {
    document.body.addEventListener('click', e => {  
        if(e.target.id == 'jogar') { 
            titulo.innerHTML = "Jogo da Adivinhação"
            startGame.style.display = "none"
            legenda.style.display = "block"
            reconhecimentoVoz()
            selecionaDificuldade()
        }
    })
}

//Capta a dificuldade selecionada
function selecionaDificuldade() {
    const select = document.querySelector('select')
    const option = select.children[select.selectedIndex]
    return dificuldade = option.textContent
}

function nivelDificuldade(dificuldade) {
    if(dificuldade == "Fácil") {
        return 20 //Número de tentativas
    }

    if(dificuldade == "Médio") {
        return 15 //Número de tentativas
    }

    if(dificuldade == "Difícil") {
        return 10 //Número de tentativas
    }
}

const elementoChute = document.getElementById('chute')

//Reconhecimento de voz
function reconhecimentoVoz() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = 'pt-Br'
    recognition.start()

    recognition.addEventListener('result', onSpeak)

    //Transcreve o que foi falado
    function onSpeak(e) {
        chute = e.results[0][0].transcript
        exibeChute(chute)
        verificaChute(chute)
    }

    //Exibe o chute dentro da Box
    function exibeChute(chute) {
        elementoChute.innerHTML = `
            <div>Você disse:</div>
            <span class="box">${chute}</span>
        `
    }

    //Ao final da fala recomeça o reconhecimento
    recognition.addEventListener('end', ()=> recognition.start())
}
