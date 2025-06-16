const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma feira de ciência e vê um robô que conversa com as pessoas, reconhece rostos e até expressa emoções. Qual é sua reação?",
        alternativas: [
            {
                texto: "Isso é incrível, parece um filme!",
                afirmacao: "Você ficou encantado e quis entender como aquele robô foi programado. "
            },
            {
                texto: "Acho perigoso esse nível de tecnologia.",
                afirmacao: "Você começou a pesquisar sobre os riscos da IA e ficou mais crítico sobre o avanço dela."
            }
        ]
    },
    {
        enunciado: "Durante uma aula, o professor propõe que os alunos criem um projeto usando IA generativa. Qual é sua ideia?",
        alternativas: [
            {
                texto: "Criar um assistente virtual que ajude alunos a estudar para provas.",
                afirmacao: "Você mostrou como a IA pode ser usada para facilitar os estudos e melhorar a educação. "
            },
            {
                texto: "Criar um detector de fake news usando IA.",
                afirmacao: "Você quis usar a IA para combater desinformação e promover pensamento crítico."
            }
        ]
    },
    {
        enunciado: "Você descobre que seu aplicativo favorito está usando seus dados para treinar uma IA sem avisar. Como você reage?",
        alternativas: [
            {
                texto: "Procura outro app que respeite a privacidade.",
                afirmacao: "Você passou a valorizar mais a transparência e a ética nas tecnologias que utiliza. "
            },
            {
                texto: "Continua usando o app, pois gosta muito dele.",
                afirmacao: "Mesmo com dúvidas, decidiu acompanhar de perto como seus dados são usados."
            }
        ]
    },
    {
        enunciado: "Na hora de fazer uma arte para um trabalho, você pode escolher entre fazer manualmente ou usar IA. O que escolhe?",
        alternativas: [
            {
                texto: "Usar IA, porque otimiza o tempo e o resultado fica ótimo.",
                afirmacao: "Descobriu que, com criatividade, dá para usar a IA como uma ferramenta poderosa. "
            },
            {
                texto: "Fazer à mão, porque prefere mostrar sua própria criação.",
                afirmacao: "Você valorizou o processo de criação manual e percebeu que a IA não substitui a originalidade."
            }
        ]
    },
    {
        enunciado: "Um colega usou IA para responder toda a prova online e tirou nota máxima. O que você acha disso?",
        alternativas: [
            {
                texto: "Não é justo. A IA pode ajudar, mas colar não é o caminho.",
                afirmacao: "Você entendeu que ética e honestidade são mais importantes que resultados rápidos. "
            },
            {
                texto: "Cada um faz o que quiser, o importante é passar.",
                afirmacao: "Você viu vantagem imediata, mas depois refletiu sobre o impacto disso no seu próprio aprendizado."
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
