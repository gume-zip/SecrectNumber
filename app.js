let tentativas = 1
let chute


alert('Olá bem vindo ao Jogo do Numero secreto,developly by G4zip')
alert('O jogo é simples, o minimo sempre é zero; o maximo você determina as tentativas são infinitas no fim, quando acertar as tentaivas utilizadas seram mostradas')
alert('Bom jogo!')

let nome = prompt('Digite seu nome para customizar a experiencia, e para começar o jogo, é lógico!')
let maximos = prompt(`${nome} por favor, fale o máximo, para que esse sirva de zero ao "máximo"`)
let numeroSecreto = parseInt(Math.random() * maximos)

while(chute!=numeroSecreto){
    chute = prompt(`fale um número de 0 á ${maximos}`)
    if(chute==numeroSecreto){
        break
    } else if(numeroSecreto>chute){
        alert(`o número secreto é maior que seu chute (${chute})`)
    } else if (numeroSecreto<chute) {
        alert(`o número secreto é menor que seu chute(${chute})`)
    }
    tentativas++
}

if(tentativas==1){
    alert(`parabens ${nome}, você acertou o número secreto ${numeroSecreto} com apenas 1 tentativa, inprecionante! dee ser o informatico`)
} else {
    alert(`parabens ${nome}, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
}


