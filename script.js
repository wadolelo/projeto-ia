const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas =[
    {
        enunciado:"Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele também gera imagens e audios hiper-realistas. Qual om primeiro pensamento?",
        alternativas: [
            {
                texto:"Isso é assustador!",
                afirmacao:"No inicio ficou com medo do que essa tecnologia pode fazer.",
            },
            {
                texto:"Isso é maravilhoso!",
                afirmacao:"quis saber como usar IA no seu dia a dia.",
            }
        ]
    },
    {
        enunciado:"com a descoberta desta tecnologia, chamada inteligencia Artificial, uma professora de tecnologia da escola decidiu fazer uma sequencia de aulas sobre essa tecnologia. No fim de uma aula ela pedeque você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao:"consegue utilizar a IA para buscar informações uteis."
            },
            {
                texto:"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos propprios sobre o tema.",
                afirmacao:"sentiu mais facilidade em utilizar seus proprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado:"Após a  elaboração do trabalho escrito, do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa escrita. Nessa conversa tambem foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como voce se posiciona?",
        alternativas: [
            {
                texto:"defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:"Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
            
            },
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para maquinas e defendem a importância de proteger os trabalhadores",
                afirmacao:"Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma etica.",
            }
        ]

    },
    {
        enunciado:"Ao final da discussão, você precisou criar uma imagem no computador que reprentasse oque pensa sore IA. E agora?",
        alternativas:[
        {
            texto: "Criar uma imagem utilizandouma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramnetas tradicionais e decidiu compartilhar seus comhecimentos de design utilizando ferramentas de pinturas digital para iniciantes."
            },
        {
            texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
            afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
        }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >=perguntas.leghth) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoalternativas = document.createElement("button");
        botaoalternativas.textContent = alternativas.texto;
        botaoalternativas.addEventListener("click", ()=> respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoalternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes=opcaoSelecionada.afirmacao;
    historiaFinal+=afirmacoes+"";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent= "em 2049...";
    textoResultado.textContent=historiaFinal;
    caixaAlternativas.textContent="";
}
mostraPergunta();

