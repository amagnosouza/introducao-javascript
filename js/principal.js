// console.log(document.querySelector("h1")); || Imprime somente o que foi selecionado
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista Maluca";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++){
    // alterar a variavel dentro do FOR
    paciente = pacientes[i];
    // capturar o valor do peso do primeiro paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // capturar o valor da altura do primeiro paciente
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    // teste de dados
    var pesoEValido = true;
    var alturaEValida = true;

    if (peso <= 0 || peso > 1000){
        console.log("Peso inválido !");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido !";
        // paciente.style.backgroundColor = "lightcoral"; ===> hardcodeStyle
        // altera a cor da linha com o erro
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura > 3.0){
        console.log("Altura inválida !");
        alturaEValida = false;
        tdImc.textContent = "Altura inválida !";
        // altera a cor da linha com o erro
        paciente.classList.add("paciente-invalido");
    }

    // calcular o imc
    if (pesoEValido && alturaEValida){
        var imc = peso / (altura ** 2);
        // atribui o calculo do imc na variavel tdImc
        tdImc.textContent = imc.toFixed(2);
    }
}
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

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //colocar os dados dentro das td's
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // adicionar cada td dentro da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // adicionar os pacientes na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});

//event.preventDefault() previne o comportamento padrão de um formulario que é enviar os dados para outra pagina.
