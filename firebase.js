// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKFNE4ZOrrvM4PGf_72CcUxSkfPs-0cQk",
  authDomain: "alunos-escola-35433.firebaseapp.com",
  projectId: "alunos-escola-35433",
  storageBucket: "alunos-escola-35433.firebasestorage.app",
  messagingSenderId: "682522156619",
  appId: "1:682522156619:web:7f0be7ecd5edbf1819f7ce"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Conecta ao Firestore
const db = getFirestore(app);

// Função para cadastrar aluno
async function cadastrarAluno(dados){

    try{

        await addDoc(collection(db,"alunos"), dados);

        alert("Aluno cadastrado com sucesso!");

    }catch(erro){

        console.error(erro);
        alert("Erro ao cadastrar aluno");

    }

}

// deixa função disponível para o HTML
window.cadastrarAluno = cadastrarAluno;