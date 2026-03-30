// =========================
// CONTROLE DE PERMISSÃO
// =========================

const modo = localStorage.getItem("modo");

window.isAdmin = function(){
return modo === "admin";
}

// =========================
// NAVBAR
// =========================

const navbar = document.createElement("div");
navbar.className = "navbar";

navbar.innerHTML = `

<button onclick="window.location='pesquisa.html'">
Pesquisar
</button>

<button onclick="window.location='relatorio.html'">
Relatório
</button>

<button class="btnAdmin" onclick="window.location='cadastro.html'">
Cadastrar aluno
</button>

<button class="btnAdmin" onclick="window.location='chamada.html'">
Chamada
</button>

<button class="btnAdmin" onclick="window.location='buscaativa.html'">
Busca ativa
</button>

<button class="btnAdmin" onclick="window.location='tarefa.html'">
ADM
</button>

<button onclick="sair()">
Sair
</button>

`;

document.body.prepend(navbar);

// =========================
// ESCONDER BOTÕES ADMIN
// =========================

if(!isAdmin()){

document.querySelectorAll(".btnAdmin").forEach(btn=>{
btn.style.display="none";
});

}

// =========================
// SAIR
// =========================

window.sair = function(){

localStorage.removeItem("modo");

window.location = "index.html";

}
