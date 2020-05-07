// Escutar eventos

// funcao anonima
// titulo.addEventListener("click", function(){
//     console.log("Aqui também funciona!");
// });

// function mostraMensagem(){
//     console.log("Olá eu fui clicado!");
// }

// Escutar o botao de adicionar do fomulario.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);



    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return; // Sai da função e não adiciona o paciente na tabela.
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemDeErro = document.querySelector("#mensagens-erro");
    mensagemDeErro.innerHTML = "";

});

//event.preventDefault() previne o comportamento padrão de um formulario que é enviar os dados para outra pagina.

function adicionaPacienteNaTabela(paciente){
        //cria a tr e a td do paciente
        var pacienteTr = montaTr(paciente);
        // adicionar os pacientes na tabela
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "" //remove mensagens de erro.

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido.");
    }

    if(!validaPeso(paciente.altura)){
        erros.push("A altura é inválida.");
    }

    if(paciente.gordura.length == 0){
        erros.push("O valor de gordura não pode ser em branco.");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco.");
    }

    return erros;
}