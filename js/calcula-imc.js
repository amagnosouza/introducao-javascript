// console.log(document.querySelector("h1")); || Imprime somente o que foi selecionado
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista Maluca";

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

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
    var pesoEValido = validaPeso(peso);
    var alturaEValida = validaAltura(altura);

    if (!pesoEValido){
        console.log("Peso inválido !");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido!";
        // paciente.style.backgroundColor = "lightcoral"; ===> hardcodeStyle
        // altera a cor da linha com o erro
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEValida){
        console.log("Altura inválida !");
        alturaEValida = false;
        tdImc.textContent = "Altura inválida!";
        // altera a cor da linha com o erro
        paciente.classList.add("paciente-invalido");
    }

    // calcular o imc
    if (pesoEValido && alturaEValida){
        var imc = calculaImc(peso,altura);
        // atribui o calculo do imc na variavel tdImc
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}