$(document).ready(function () {
    let teclas = { //Teclas que fazem parte do Konami Code.
        37: 'esquerda',
        38: 'cima',
        39: 'direita',
        40: 'baixo',
        65: 'a',
        66: 'b'
    }
    let konamiCode = ['cima', 'cima', 'baixo', 'baixo', 'esquerda', 'direita', 'esquerda', 'direita', 'b', 'a'] //ordem das teclas.
    let posicao = 0 //posição inicial.

    $(document).keydown(function (e) {
        let tecla = teclas[e.keyCode] //captura a tecla pressionada.
        let teclaNecessaria = konamiCode[posicao] //seta a tecla que deve ser pressionada.
        if (tecla == teclaNecessaria) { //Compara se a tecla pressionada é a tecla correta.
            posicao++ //Incremeta a posição.
            if (posicao == konamiCode.length) { //Compara se a posição é igual ao tamanho do array.
                ativado() //Chama a função definida ao codigo ser digitado corretamente.
                posicao = 0 //Apos chamar a função volta a posição inicial.
            }
        } else {
            posicao = 0 //Se não for, volta a posição inicial.
        }
    })

    function ativado() { //Função chamada quando as teclas forem pressionadas na ordem correta.
        alert('Konami Code ativado.')
    }
})