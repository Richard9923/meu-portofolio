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
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", abrindoAba);

// função abrindo aba
function abrindoAba() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    sobreMimProjetos.classList.remove("sobreMimProjetos1");
    sobreMimProjetos2.classList.remove("sobreMimProjetos2");
    sobreMimProjetos3.classList.remove("sobreMimProjetos3");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    sobreMimProjetos.classList.add("sobreMimProjetos1");
    sobreMimProjetos2.classList.add("sobreMimProjetos2");
    sobreMimProjetos3.classList.add("sobreMimProjetos3");
  }
}

// função efeito maquina de escrever

function typeWriter(elemento) {
  const textoArray = elemento.innerText.split("");
  elemento.innerText = " ";
  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      elemento.innerText += `${letra}`;
    }, 90 * i);
  });
}

typeWriter(conteudoTitulo);
