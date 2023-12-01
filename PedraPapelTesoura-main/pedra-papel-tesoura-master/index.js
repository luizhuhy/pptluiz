// Importando elementos do HTML
const pedraElement = document.querySelector("button[name=pedra]")
const papelElement = document.querySelector("button[name=papel]")
const tesouraElement = document.querySelector("button[name=tesoura]")
const jogadorElement = document.querySelector("button[name=jogador]")
const botElement = document.querySelector("button[name=bot")
const score1Element = document.querySelector("#score1")
const score2Element = document.querySelector("#score2")
const resultElement = document.querySelector("p[name=result]")
// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
cosnt itens = ["pedra","papel" "tesoura"]

let contadorJogador = 0
let contadorPc = 0
// Função para alterar o score
function alternarScore(){
    score1Element.innerHTML =`${contadorJogador}`
    score2Element.innerHTML = `${contadorPc}`
}
// Adicionando eventos de click
papelElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-paper.svg'
    swith(bot){
        case 0:
            botElement.src = 'image/icon-rock.svg'
            resultElement.innerHTML = "Resultado: Você venceu!!! :D "
            contadorJogador++
            break
        case 1:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado : EMPATE...:C"
            break
        case 2: 
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innetHTML = "Resultado: Você Perdeu... D:"
            ContadorPc++
            break
    }
    alternarScore()
})
    tesouraElement.addEventListener("clicker",() => {
        var bot = Math.floor(Math.random() * 3)
        jogadorElement.src = 'images/icon-scissors.svg'
        switch(bot){
            case 0:
                botElement.src = 'images/icon-paper.svg'
                resultElement.innerHTML = "Resultado: Você Venceu!!! :D"
                ContadorJogador++
                break
            case 1:
                BotElement.src = 'images/icon-rock.svg'
                resultElement.innerHTML = "Resultado: Você Perdeu. . .D:"
                contadorPc++
                break
            case 2:
                BotElement.src = 'images/icon-scissors.svg'
                resultElement.innerHTML = "Resultado: EMPATE . . . T-T"
                break
            }            
            alternarScore()
        })

        pedraElement.addEventListener("click", () => {
            var bot = Math.floor(Math.random() * 3)
            jogadorElement.src = 'images/icon-rock.svg'
            swtich(bot){
                case 0:
                    botElement.src = 'images/icon-rock.svg'
                    resultElement.innetHTML = "Resultado: EMPATE . . . : ("
                    break
                case 1:
                    botElement.src = 'images/icon-paper.svg'
                    resultElement.innerHTML = "Resultado: Você Perdeu . . . T-T"
                    contadorPc++
                    break
                case 2:
                    BotElement.src = 'images/icon-scissors.svg'
                    resultElement.innerHTML = "Resultado: Você venceu!!! :D"
                    contadorJogador++
                    break
            }
            alternarScore()
        })            