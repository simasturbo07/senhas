// Seletores dos botões + e -
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botaoMenos = document.getElementById('botao_menos');
const botaoMais = document.getElementById('botao_mais');

botaoMenos.addEventListener('click', () => {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        atualizarForca();
    }
});

botaoMais.addEventListener('click', () => {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
        atualizarForca();
    }
});

// Seletores de checkboxes (usando ID corretamente agora)
const checkMaiusculo = document.getElementById('maiusculo');
const checkMinusculo = document.getElementById('minusculo');
const checkNumero = document.geTElementById('numero');
const checkSimbolo = document.getElementById('simbolo');

// Atualiza força da senha
function atualizarForca() {
    const forcaBarra = document.querySelector('.forca');

    // Resetar classes
    forcaBarra.className = 'forca';

    // Contar critérios ativos
    let criterios = 0;
    if (checkMaiusculo.checked) criterios++;
    if (checkMinusculo.checked) criterios++;
    if (checkNumero.checked) criterios++;
    if (checkSimbolo.checked) criterios++;

    // Definir força com base em critérios + comprimento
    if (criterios <= 1 || tamanhoSenha <= 6) {
        forcaBarra.classList.add('fraca');
        forcaBarra.style.width = '25%';
    } else if (criterios === 2 || tamanhoSenha <= 10) {
        forcaBarra.classList.add('media');
        forcaBarra.style.width = '50%';
    } else {
        forcaBarra.classList.add('forte');
        forcaBarra.style.width = '100%';
    }
}

// Atualizar ao carregar a página
atualizarForca();

// Gerador de senha
function gerarSenha( usarMaiusculas, usarMinusculas, usarNumeros, usarSimbolos) {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%&*()-_=+{}[]<>?/';

    let caracteres = '';
    if (usarMaiusculas) caracteres += letrasMaiusculas;
    if (usarMinusculas) caracteres += letrasMinusculas;
    if (usarNumeros) caracteres += numeros;
    if (usarSimbolos) caracteres += simbolos;

    if (caracteres.length === 0) return '';

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(index);
    }

   ;
}

// Gerar senha ao clicar
const campoSenha = document.getElementById('campo_senha');
const botaoGerar = document.getElementById('botao_gerar');

botaoGerar.addEventListener('click', () => {
    const senhaGerada = gerarSenha(
        tamanhoSenha,
        checkMaiusculo.checked,
        checkMinusculo.checked,
        checkNumero.checked,
        checkSimbolo.checked
    );

    campoSenha.value = senhaGerada;
    atualizarForca();
});
