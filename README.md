<h1 align="center"> Jogo da Adivinhação </h1> 

![Badege Release = September](https://img.shields.io/static/v1?label=release&message=september&color=)
![Badege Version](https://img.shields.io/static/v1?label=version&message=1.0&color=red)
![Badge Commit Activity](https://img.shields.io/github/commit-activity/m/pedromessetti/jogo-da-adivinhacao)

## Índice
* [Índice](#índice)

* [Descrição](#descrição)

* [Status](#barchart-status)

* [Acesso ao Projeto](#computer-acesso-ao-projeto)

* [Abra e Personalize](#package-abra-e-personalize)

* [Como Jogar](#videogame-como-jogar)

* [Tecnologias Utilizadas](#tecnologias-utilizadas)

* [Autor](#autor)


## Descrição
O projeto consiste em um jogo de adivinhação que funciona através do reconhecimento de voz onde um número aleatório é sorteado dentro de um intervalo de valores e, dependendo do nível de dificuldade que o jogador escolher, terá um número limitado de tentativas para tentar adivinhar o número escolhido através da fala.

## :bar_chart: Status
O projeto está na sua versão 1.0 e está pronto para uso. Atualizações sucintas virão no futuro.

## :computer: Acesso ao Projeto
Você pode acessar o jogo através deste link:
<br>
https://jogo-da-adivinhacao.vercel.app/

Ou <a href="https://github.com/pedromessetti/jogo-da-adivinhacao/archive/refs/heads/main.zip" download="jogo-da-adivinhacao.zip">clique aqui</a> para baixar o arquivo e modificá-lo como quiser.

## :package: Abra e Personalize
Após baixar o arquivo _.zip_, descompacte-o e abra a pasta com o Visual Studio Code ou com o editor de código que preferir. Divirta-se editando e personalizando o jogo da sua maneira, mude os estilos, cores, mensagens, altere o número de tentativas, os valores mínimos e máximos, os botões e muito mais.

**Caso venha a postar suas modificações não se esqueça de me marcar! @pedromessetti em todas as redes sociais.**

## :video_game: Como Jogar
Ao iniciar o jogo terá de selecionar o nível de dificuldade e clique no botão "Jogar":

* Fácil: 20 tentativas para acertar o número.

* Médio: 15 tentativas para acertar o número.

* Difícil: 10 tentativas para acertar o número.

:exclamation:Poderá personalizar o número de tentativas acessando o arquivo _start.js_ e altere através da função:
```
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
```
Após clicar em "Jogar" basta dizer seu chute, o reconhecimento de voz irá captar o valor dito e caso não seja um valor dentro do intervalo determinado (default: 1-1000) ou um valor NaN, aparecerá uma mensagem de erro e o palpite não será contabilizado.

:exclamation:O valor mínimo e máximo pode ser alterado no arquivo _sortearNumeros.js_ e acessando as constantes: 
```
const menorValor = 1
const maiorValor = 1000
```

Caso seja um valor válido, o palpite será contabilizado. Se o palpite estiver correto aperecerá uma mensagem de congratulação e o jogo dará a opção de ser reiniciado. Se estiver errado você poderá continuar chutando até acertar ou até acabar suas tentativas.

Ao finalizar suas tentativas aparecerá uma mensagem de "Game Over" e uma opção de jogar novamente. Em qualquer momento do jogo o player pode dizer "Game Over" e automaticamente o jogo encerra, dando a opção de ser reiniciado, caso não queira jogar novamente basta fecha-lo.

## Tecnologias Utilizadas


## Autor
| [<img src="img/eu.png" width=115><br><sub>Pedro Vinicius Messetti</sub>](https://github.com/pedromessetti) |
| :---: |
