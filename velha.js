var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}