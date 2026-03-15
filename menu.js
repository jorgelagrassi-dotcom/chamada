const modo = localStorage.getItem("modo");

let menu = `
<div class="navbar">

<button onclick="window.location='index.html'">
INICIO
</button>

<button onclick="window.location='pesquisa.html'">
PESQUISA
</button>
`;

if(modo === "admin"){

menu += `

<button onclick="window.location='cadastro.html'">
CADASTRO
</button>

<button onclick="window.location='chamada.html'">
CHAMADA
</button>

<button onclick="window.location='buscaativa.html'">
BUSCA ATIVA
</button>



<button onclick="window.location='relatorio.html'">
RELATÓRIO
</button>

`;

}

menu += `</div>`;

document.write(menu);

/* BLOQUEAR PÁGINAS RESTRITAS */

const paginasRestritas = [
"cadastro.html",
"chamada.html",
"buscaativa.html",
"mensagem.html",
"relatorio.html"
];

const paginaAtual = window.location.pathname.split("/").pop();

if(modo !== "admin" && paginasRestritas.includes(paginaAtual)){

alert("Acesso permitido apenas para administradores");

window.location = "pesquisa.html";

}