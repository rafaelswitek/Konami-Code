document.addEventListener('DOMContentLoaded', function () {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let posicao = 0

    document.addEventListener('keydown', function (e) {
        const teclaNecessaria = konamiCode[posicao]

        if (e.key == teclaNecessaria) {
            colorPressedKey(posicao)
            posicao++

            if (posicao === konamiCode.length) {
                setTimeout(function () {
                    alert('Konami Code ativado.')
                    posicao = 0
                    resetColors()
                }, 100)
            }
        } else {
            posicao = 0
            resetColors()
        }
    })

    function colorPressedKey(posicao) {
        const elements = document.querySelectorAll(`.keys`)

        if (elements && elements[posicao]) {
            elements[posicao].classList.add('active')
        }
    }

    function resetColors() {
        const elements = document.querySelectorAll('.keys')

        elements.forEach((element) => {
            element.classList.remove('active')
        })
    }
})
