const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");
const icone = document.querySelector(".icone");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    linksMenu.classList.toggle("aberto");

    /* Se a classe "aberto" estiver apliocadaao linksMenu, mude o texto/icone para "fechar x".
    Caso contrario, mostre o texto/icone "Menu &equiv;"   */
    if (linksMenu.classList.contains("aberto")) {
        icone.innerHTML = "Fechar &times";
    } else {
        icone.innerHTML + "Menu &equiv";
    }
    
});