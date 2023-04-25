/*  Selecionando elementos a serem manipulados */
const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const status = document.querySelector("#status");
const botaoLocalizar = document.querySelector("#localizar-cep");

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
    .then( function(dados){
        console.log(dados);
    })



})