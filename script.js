const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nos últimos anos,o Brasil tem enfrentado um aumento significativo no número de queimadas, especialmente durante os meses secos.Isso gerou preucupações tanto nacional quanto internacionalmente sobre as politicas ambintais e a proteção dos biomas brasileiros. A conscientização sobre os impactos das queimadas e a busca por práticas ágricolas sustentaveis são essenciais para mitigar esses efeitos e preservar os ecossistemas dos pais",
        alternativas: [
            {
                texto: "Isso é maravilhoso!",   
            },
            {
                texto: "Isso é assustador!",   
            }
        ]
    },
    {
        enunciado: "Um tipo de queimadas e a para limpeza, geralmente promovidas por agricultores e pecuaristas,em áreas  de pastagens ou de agricultura, para renovação do solo e introdução de sais minerais liberados pela pratica.Esses incendios podem atingir áreas florestais e sair do controle",
        alternativas: [
            {
                texto: " Concordo,é preciso para a agricultura continuar",
              
            },
            {
                texto: "Não concordo,pois queimads podem sair do controle.",
            }
        ]
    },
    { 
    enunciado: "As consequencias das queimadas, de modo geral, são prejudiciais, tanto oa meio ambiente quanto á saúde humana.De forma direta,as queimadas geram distruição ambiental dos biomas e áreas que elas afetam,e elas também emitem gases poluentes e fumaça,que causam mal á saúde do ser humano quando inalados imediatamente.Outras doenças respiratorias podem ser desenvolvidas pelo contato direto com esses gazes, como bronquite, sinusite e renite.",
    alternativas: [
        {
            texto: "Não faz mal algum á vida humana"
        },
        {
            texto: " Faz muito mal á vida humana, como prejudica a saúde",
        }
    ]
},
{
    enunciado: "A criação de penalidades legais em cada pais é a forma mais eficiente de tentativas de combate aos incendios, com criação de multas elevads para quem os comete.Outras ações podem ser realizadas para evitar incendios acidentais ,como o não descartede cigarros ou materias em chamas proximas de áreas de florestas ou pastagens e estradas.Queimadas pejudica muito o oxigenio que usamos para sobriviver",
    alternativas: [
        {
            texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
        },
        {
            texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
            afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
        }
    ]
},
{
    enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
    alternativas: [
        {
            texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
        },
        {
            texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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