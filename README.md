# Konami Code

Código que captura as teclas digitadas referente o Konami Code
↑ ↑ ↓ ↓ ← → ← → B A

| :placard: Vitrine.Dev ||
| --------------------- | ------------------------------------------------ |
| :sparkles: Nome       | **Konami Code** |
| :label: Tecnologias   | JavaScript |
| :rocket: URL          ||

## Detalhes do projeto

### Conceitos estudados e aplicados

* Event Listeners: O código faz uso de Event Listeners para reagir a eventos no documento. O evento 'DOMContentLoaded' é usado para garantir que o código JavaScript só seja executado quando a página foi completamente carregada. Além disso, um Event Listener para o evento 'keydown' é usado para capturar as teclas pressionadas.
* Arrays: O código usa um array chamado konamiCode para armazenar uma sequência específica de teclas que devem ser pressionadas.
* Loops: Há um loop forEach que é usado para iterar através de elementos HTML e remover uma classe chamada 'active' deles.
* Funções: O código define duas funções, colorPressedKey e resetColors, para modificar classes CSS em elementos HTML e redefinir as cores, respectivamente.
* Condições (if statements): O código usa uma instrução condicional if para comparar a tecla pressionada (e.key) com a próxima tecla necessária na sequência (teclaNecessaria). Se a tecla pressionada corresponder à tecla necessária, a posição na sequência é incrementada e, se a sequência inteira for digitada corretamente, um alerta é exibido.
* Timeout (setTimeout): Um temporizador setTimeout é usado para exibir o alerta 'Konami Code ativado' após a sequência ser digitada corretamente.
* Seletores do DOM: O código faz uso de seletores do Document Object Model (DOM) para selecionar elementos HTML com a função document.querySelectorAll. Ele seleciona elementos com a classe 'keys' e adiciona ou remove a classe 'active' a esses elementos.
* Variáveis: O código utiliza variáveis como posicao para acompanhar a posição atual na sequência e teclaNecessaria para armazenar a tecla necessária em um determinado momento.
