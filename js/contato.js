/*  Selecionando elementos a serem manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoTelefone = formulario.querySelector("#telefone");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const mensagem = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

/* Ativação das Máscaras */
$(campoCep).mask("00000-000");
$(campoTelefone).mask("(00)0000-0000");




/* Monitorando o evento de acionamento do botão localizar cep */

botaoLocalizar.addEventListener("click", function (event) {
    event.preventDefault();

    //pegar o cep digitado
    let cep = campoCep.value;

    console.log(cep);

    /*"Ajax": técnica de comunicação assincrona
     API (web service) viaCEP 
    www.viacep.com.br */

    /* Etapa 1: preparar uma url contendo o cep digitadoe o caminho da API (via cep)*/
    let url = `https://viacep.com.br/ws/${cep}/json`;


    /* Etapa 2: acesse e inicie uma comunicação com o servidor da URL indicada */
    fetch(url)

        /* Etapa 3: ...e então, recupere a resposta do servidor */
        .then(resposta => resposta.json())
        /* Etapa 4...então, extraia os dados da resposta e mostre na tela */
        .then(function (dados) {
            console.log(dados);
            //Se existir o indicador "erro" no objeto dados
            if ("erro" in dados) {
                //apresentamos o cep existe então mostramos
                mensagem.innerHTML = "CEP não encontrado!";
                mensagem.style.color = "red";
                campoCep.focus();

            } else {
                mensagem.innerHTML = "CEP encontrado!";
                mensagem.style.color = "blue";
                campoEndereco.value = dados.logradouro;
                campoBairro.value = dados.bairro;
                campoCidade.value = dados.localidade;
                campoEstado.value = dados.uf;


            }


        })



})