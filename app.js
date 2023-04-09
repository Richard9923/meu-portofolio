const hamburger = document.querySelector(".hamburger");
const sobre = document.querySelector(".sobreMim");
const botaoProjeto = document.querySelector(".botaoProjeto");
const sobreMimProjetos = document.querySelector(".sobreMimProjetos1");
const sobreMimProjetos2 = document.querySelector(".sobreMimProjetos2");
const sobreMimProjetos3 = document.querySelector(".sobreMimProjetos3");
const escape = document.querySelector(".sobreMimBotaoEscape");
const iconePrincipal = document.querySelector(".icon-logo");
const conteudoTitulo = document.querySelector(".conteudo-titulo");
const conteudoApresentacao = document.querySelector(".conteudo-apresentacao");

// click eventos para abrir a aba
hamburger.addEventListener("click", sobreMimOPC);
escape.addEventListener("click", fecharAba);

// função abrindo aba
function sobreMimOPC() {
  sobreMimProjetos.classList.remove("sobreMimProjetos1");
  sobreMimProjetos2.classList.remove("sobreMimProjetos2");
  sobreMimProjetos3.classList.remove("sobreMimProjetos3");
  escape.classList.remove("sobreMimBotaoEscape");
  iconePrincipal.classList.add("icon-logo-aba-aberta");
  hamburger.classList.add("esconder");
}

//função fechando a aba
function fecharAba() {
  escape.classList.add("sobreMimBotaoEscape");
  sobreMimProjetos.classList.add("sobreMimProjetos1");
  sobreMimProjetos2.classList.add("sobreMimProjetos2");
  sobreMimProjetos3.classList.add("sobreMimProjetos3");
  hamburger.style.opacity = "2";
  hamburger.classList.remove("esconder");
  iconePrincipal.classList.remove("icon-logo-aba-aberta");
}

// função efeito maquina de escrever

function typeWriter(elemento) {
  const textoArray = elemento.innerText.split("");
  elemento.innerText = " ";
  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      elemento.innerText += `${letra}`;
    }, 75 * i);
  });
}

typeWriter(conteudoTitulo);

// efeito rolagem