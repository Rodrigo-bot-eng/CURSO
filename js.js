// Dados dos cursos
const cursos = [
  {
    id: 1,
    titulo: "Vendas Milionárias 🚀",
    descricao: "Aprenda técnicas de vendas para fechar negócios de alto valor e aumentar seu faturamento.",
    categoria: "Vendas",
    preco: "R$ 799,00",
  },
  {
    id: 2,
    titulo: "Investimentos para Iniciantes 💰",
    descricao: "Entenda como investir com segurança e começar a multiplicar seu dinheiro do zero.",
    categoria: "Investimentos",
    preco: "R$ 499,00",
  },
  {
    id: 3,
    titulo: "Mindset de Milionário 🧠",
    descricao: "Desenvolva a mentalidade correta para alcançar sucesso financeiro e pessoal.",
    categoria: "Mentalidade",
    preco: "R$ 299,00",
  },
  {
    id: 4,
    titulo: "Marketing Digital Avançado 📈",
    descricao: "Domine estratégias para criar campanhas que geram lucro e aumentam sua audiência.",
    categoria: "Marketing",
    preco: "R$ 699,00",
  }
];

// Referências DOM
const courseList = document.getElementById("course-list");
const btnAbrirModal = document.getElementById("btn-abrir-modal");
const modal = document.getElementById("modal");
const btnFecharModal = document.getElementById("btn-fechar-modal");
const formInscricao = document.getElementById("form-inscricao");
const msgSucesso = document.getElementById("msg-sucesso");

// Renderiza cursos na página
function renderizarCursos() {
  cursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${curso.titulo}</h3>
      <div class="category">${curso.categoria}</div>
      <p>${curso.descricao}</p>
      <div class="price">${curso.preco}</div>
    `;
    courseList.appendChild(card);
  });
}

// Abre modal
function abrirModal() {
  modal.classList.remove("hidden");
  msgSucesso.textContent = "";
  formInscricao.reset();
}

// Fecha modal
function fecharModal() {
  modal.classList.add("hidden");
}

// Valida e envia formulário
function enviarFormulario(event) {
  event.preventDefault();

  const nome = formInscricao.nome.value.trim();
  const email = formInscricao.email.value.trim();
  const cursoSelecionado = formInscricao.curso.value;

  if (nome === "" || email === "" || cursoSelecionado === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  // Aqui você pode implementar envio para servidor ou API (simulado)
  msgSucesso.textContent = "Inscrição realizada com sucesso! 📩 Verifique seu email.";
  formInscricao.reset();
}

// Função simples para validar email
function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Eventos
btnAbrirModal.addEventListener("click", abrirModal);
btnFecharModal.addEventListener("click", fecharModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});
formInscricao.addEventListener("submit", enviarFormulario);

// Inicialização
renderizarCursos();
