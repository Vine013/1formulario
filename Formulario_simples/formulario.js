let formulario = document.getElementById("formulario"); /*Define o evento*/

formulario.addEventListener("submit", (e) =>{ /*Caputra o evento*/

    e.preventDefault(); /*Não submete o formulario*/

    let nome = document.getElementById("nome").value; /*Armazenando os dados nas variáveis*/
    let nickname = document.getElementById("nick").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    /*pra onde vai navegar após armazenar valores na variavel*/
    window.location.href = "tabela.html?nome=" + nome + "&nick=" + nickname + "&email=" + email + "&senha=" + senha;  

});

