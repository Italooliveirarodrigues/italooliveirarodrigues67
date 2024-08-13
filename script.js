const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal característica do boto cor de rosa de acordo com o folclore brasileiro?",
        alternativas: [
            { texto: "A) Ele é conhecido por transformar-se em um homem encantador para seduzir mulheres.", correta: true },
            { texto: "B) Ele é famoso por ser um protetor das crianças que brincam perto da água.", correta: false }
        ]
    },
    {
        enunciado: "Qual é a principal consequência de um encontro com o boto cor de rosa, segundo a tradição?",
        alternativas: [
            { texto: "A) A mulher que encontra o boto pode engravidar e ter um filho com ele.", correta: true },
            { texto: "B) A pessoa que encontra o boto ganha um desejo concedido.", correta: false }
        ]
    },
    {
        enunciado: "Qual é a origem das lendas sobre o boto cor de rosa na cultura amazônica?",
        alternativas: [
            { texto: "A) Elas surgiram como uma explicação para desaparecimentos e eventos misteriosos na comunidade ribeirinha.", correta: true },
            { texto: "B) Elas foram criadas para ensinar crianças sobre os perigos de nadar em águas profundas.", correta: false }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ""; // Limpa alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada.correta) {
        historiaFinal += "Resposta correta!\n";
    } else {
        historiaFinal += "Resposta incorreta.\n";
    }

    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPrincipal.style.display = "none";
    caixaResultado.style.display = "block";
    textoResultado.textContent = historiaFinal;
    caixaPerguntas.textContent = ""; // Limpa o texto da pergunta
    caixaAlternativas.textContent = ""; // Limpa as alternativas
}

mostraPergunta();
