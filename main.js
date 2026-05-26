// --- SISTEMA DO CONTADOR DINÂMICO ---
function iniciarContador() {
    const elementoNumero = document.getElementById("numero");
    let numeroAtual = 0;
    const meta = 142; // Alvo do contador fictício
    const velocidade = 20; // Quanto menor, mais rápido

    const intervalo = setInterval(() => {
        if (numeroAtual < meta) {
            numeroAtual += 2;
            elementoNumero.innerText = numeroAtual;
        } else {
            elementoNumero.innerText = meta + "+";
            clearInterval(intervalo);
        }
    }, velocidade);
}

// --- SISTEMA DO QUIZ INTERATIVO (AGRINHO) ---
const perguntasQuiz = [
    {
        pergunta: "Qual dessas práticas ajuda a reter água no solo e evita a erosão?",
        opcoes: ["Plantio Direto na Palha", "Queimada Controlada", "Uso excessivo de tratores"],
        correta: 0
    },
    {
        pergunta: "O que os drones fazem principalmente na agricultura sustentável?",
        opcoes: ["Substituem os trabalhadores", "Mapeiam pragas para aplicar insumos só onde precisa", "Regam a plantação inteira sozinhos"],
        correta: 1
    },
    {
        pergunta: "Fontes de energia limpa no campo incluem energia solar e...",
        opcoes: ["Carvão mineral", "Biomassa (resíduos orgânicos)", "Combustíveis fósseis"],
        correta: 1
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const perguntaTexto = document.getElementById("pergunta-texto");
    const alternativasBox = document.getElementById("alternativas-box");
    
    // Limpa alternativas anteriores
    alternativasBox.innerHTML = "";
    
    let dadosPergunta = perguntasQuiz[indicePerguntaAtual];
    perguntaTexto.innerText = dadosPergunta.pergunta;
    
    // Cria os botões de resposta dinamicamente
    dadosPergunta.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.classList.add("btn-opcao");
        botao.onclick = () => verificarResposta(indice);
        alternativasBox.appendChild(botao);
    });
}

function verificarResposta(indiceSelecionado) {
    if (indiceSelecionado === perguntasQuiz[indicePerguntaAtual].correta) {
        pontuacao++;
    }
    
    indicePerguntaAtual++;
    
    if (indicePerguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        mostrarResultados();
    }
}

function mostrarResultados() {
    document.getElementById("pergunta-box").classList.add("oculto");
    const resultadoBox = document.getElementById("resultado-quiz");
    const placarTexto = document.getElementById("placar-texto");
    
    resultadoBox.classList.remove("oculto");
    placarTexto.innerHTML = `Você acertou <strong>${pontuacao}</strong> de <strong>${perguntasQuiz.length}</strong> perguntas!<br>` + 
                            (pontuacao === 3 ? "Excelente! Você é um mestre da sustentabilidade!" : "Bom trabalho! Continue estudando para proteger nosso futuro.");
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    document.getElementById("resultado-quiz").classList.add("oculto");
    document.getElementById("pergunta-box").classList.remove("oculto");
    carregarPergunta();
}

// Inicializações automáticas ao carregar a página
window.onload = () => {
    iniciarContador();
    carregarPergunta();
};
