const startGame = document.getElementById('start')
const legenda = document.querySelector('.menor-maior')
const titulo = document.querySelector('.title')

function comecou() {
    document.body.addEventListener('click', e => {  
        if(e.target.id == 'comecar') { 
            titulo.innerHTML = "Jogo da Adivinhação"
            startGame.style.display = "none"
            legenda.style.display = "block"
            reconhecimentoVoz()
            selecionaDificuldade()
        }
    })
}

comecou()

function selecionaDificuldade() {
    const select = document.querySelector('select')
    const option = select.children[select.selectedIndex]
    return dificuldade = option.textContent
}

function nivelDificuldade(dificuldade) {
    if(dificuldade == "Fácil") {
        return 20
    }

    if(dificuldade == "Médio") {
        return 15
    }

    if(dificuldade == "Difícil") {
        return 10
    }
}

const elementoChute = document.getElementById('chute')

function reconhecimentoVoz() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = 'pt-Br'
    recognition.start()

    recognition.addEventListener('result', onSpeak)

    function onSpeak(e) {
        chute = e.results[0][0].transcript
        exibeChute(chute)
        verificaChute(chute)
    }

    function exibeChute(chute) {
        elementoChute.innerHTML = `
            <div>Você disse:</div>
            <span class="box">${chute}</span>
        `
    }

    recognition.addEventListener('end', ()=> recognition.start())
}
