function SoundPlay(idElementoAudio) {
    // Essa função reproduz o áudio de um elemento com o ID especificado.
    document.querySelector(idElementoAudio).play();
}

// Seleciona todos os elementos com a classe 'tecla' no DOM.
const buttonList = document.querySelectorAll('.tecla'); // cria uma lista de botões


let cont = 0; // Inicializa um contador em 0.

while (cont < buttonList.length) { // Enquanto o contador for menor que o número de botões na lista, faça o seguinte:

    const tecla = buttonList[cont]; // Obtém o botão atual da lista.

    const instrumento = tecla.classList[1]; // Obtém a segunda classe do botão, que deve representar o instrumento.

    const idAudio = `#som_${instrumento}`; // Gera um ID para o elemento de áudio com base no instrumento.

    tecla.onclick = function () {
        // Configura um evento de clique para o botão atual que chama a função SoundPlay com o ID do áudio correspondente.
        SoundPlay(idAudio);
    }

    cont = cont + 1; // Incrementa o contador para processar o próximo botão.
}
