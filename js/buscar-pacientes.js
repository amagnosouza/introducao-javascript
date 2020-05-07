//console.log("Buscarei pacientes");
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //vai buscar as informações da API

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            //console.log(resposta);
            //console.log(typeof resposta);
            var pacientes = JSON.parse(resposta);
            //console.log(pacientes);
            //console.log(typeof pacientes);
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

        
    });

    xhr.send(); //envia a requisição
    
});