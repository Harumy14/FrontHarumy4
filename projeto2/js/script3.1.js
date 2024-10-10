function myFunction(){
    console.log("Botão foi clicado!")
}
document.addEventListener('DOMContentLoaded', function() {
    var options = document.querySelectorAll('.option');

    options.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove a classe 'active' de todas as opções
            options.forEach(function(opt) {
                opt.classList.remove('active');
            });
            // Adiciona a classe 'active' à opção clicada
            option.classList.add('active');
        });
    });
});

function exibirResultado(){
    let answers = [];
    let questoes = document.querySelectorAll('.questao-container');
    questoes.forEach(questao => {
        let selectedOption = questao.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            answers.push(null);
        }
    });

    // Mapeamento de respostas para sugestões de profissões
let profissaoMap = {
    "Fortes habilidades de liderança e comunicação.": "Gestor de Projetos",
    "Experiência significativa em gerenciamento de projetos.": "Gerente de Projetos",
    "Conhecimentos avançados em ferramentas específicas da área.": "Especialista Técnico",
    "Criativo": "Designer",
    "Prático": "Programador",
    "Organizado": "Analista",
    "Normal": "Escritório",
    "Nervoso": "Home Office",
    "Tento me acalmar": "Ambos",
    "Introvertido": "Testador",
    "Extrovertido": "Desenvolvedor de Jogos",
    "Sentimental": "Desenvolvedor de Software",
    "Emocional": "Analista de Suporte Técnico",
    "Conformista": "Engenheiro de QA",
    "Inovador": "Arquiteto de Soluções",
    "Assertivo": "Gerente de Projetos de TI",
    "Cauteloso": "Analista de Segurança da Informação"
};

    let sugestaoProfissao = '';
    for (let answer of answers) {
        if (profissaMap[answer]) {
            sugestaoProfissao = profissaMap[answer];
            break;
        }
    }
    // Adicionando logs para verificar o valor da profissão sugerida
    console.log("Respostas: ", answers);
    console.log("Profissão sugerida: ", sugestaoProfissao);

    if (sugestaoProfissao === "Gestor de Projetos") {
        window.location.href = "http://127.0.0.1:5501/Gestor.html";
    } else if (sugestaoProfissao === "Gerente de Projetos") {
        window.location.href = "http://127.0.0.1:5501/Gerente.html";
    } else if (sugestaoProfissao === "Especialista Técnico") {
        window.location.href = "http://127.0.0.1:5501/Especialista.html";
    } else if (sugestaoProfissao === "Desiger") {
        window.location.href = "http://127.0.0.1:5501/Desiger.html";
    }else if (sugestaoProfissao === "Programador") {
        window.location.href = "http://127.0.0.1:5501/Programador.html";
    }else if (sugestaoProfissao === "Analista") {
        window.location.href = "http://127.0.0.1:5501/Analista.html";
    }else if (sugestaoProfissao === "Escritório") {
        window.location.href = "http://127.0.0.1:5501/Escritório.html";
    }else if (sugestaoProfissao === "Home Office") {
        window.location.href = "http://127.0.0.1:5501/Home_Office.html";
    }else if (sugestaoProfissao === "Ambos") {
        window.location.href = "http://127.0.0.1:5501/Ambos.html";
    }else if (sugestaoProfissao === "Testador") {
        window.location.href = "http://127.0.0.1:5501/Testador.html";
    }else if (sugestaoProfissao === "Desenvolvedor de Jogos") {
        window.location.href = "http://127.0.0.1:5501/Jogos.html";
    }else if (sugestaoProfissao === "Desenvolvedor de Software") {
        window.location.href = "http://127.0.0.1:5501/Software.html";
    }else if (sugestaoProfissao === "Analista de Suporte Técnico") {
        window.location.href = "http://127.0.0.1:5501/Técnico.html";
    }else if (sugestaoProfissao === "Engenheiro de QA") {
        window.location.href = "http://127.0.0.1:5501/Engenheiro.html";
    }else if (sugestaoProfissao === "Arquiteto de Soluções") {
        window.location.href = "http://127.0.0.1:5501/Arquiteto.html";
    }else if (sugestaoProfissao === "Gerente de Projetos de TI") {
        window.location.href = "http://127.0.0.1:5501/Projetos_de_TI.html";
    }else if (sugestaoProfissao === "Analista de Segurança da Informação") {
        window.location.href = "http://127.0.0.1:5501/Analista_Informaçao.html";
    };

    // Verifica se o div resultados existe
    let result = document.getElementById('resultados');
    if (result) {
        // Exibe o resultado
        console.log("Div resultados encontrado");
        result.style.display = 'block';
        result.innerHTML = `<div class="feedback">Profissão Sugerida: ${sugestaoProfissao}</div>`;
    }else{
        console.log("Div resultados não encontrado");
    }
}