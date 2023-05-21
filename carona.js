// Função para processar o formulário de cadastro
function processarCadastro(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Obtém os valores dos campos do formulário
  const cnh = document.getElementById("cnh").value;
  const antecedentes = document.getElementById("antecedentes").value;
  const endereco = document.getElementsByClassName("endereco").value;
  const escola = document.getElementById("escola").value;

  // Validação dos campos (adapte de acordo com suas necessidades)
  if (!cnh || !antecedentes || !endereco || !escola) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Cria um objeto com os dados do cadastro
  const cadastro = {
    cnh: cnh,
    antecedentes: antecedentes,
    endereco: endereco,
    escola: escola,
  };

  // Faça algo com os dados do cadastro, como enviar para o servidor ou salvar no banco de dados
  // Exemplo:
  enviarCadastroParaServidor(cadastro);
}

// Função para enviar o cadastro para o servidor (exemplo)
function enviarCadastroParaServidor(cadastro) {
  // Aqui você pode usar AJAX, Fetch API ou outras tecnologias para enviar os dados para o servidor
  // Exemplo usando Fetch API:
  fetch("caminho/do/servidor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cadastro),
  })
    .then((response) => response.json())
    .then((data) => {
      // Processar a resposta do servidor, se necessário
      console.log("Cadastro enviado com sucesso:", data);
      // Limpar o formulário, redirecionar o usuário, exibir uma mensagem de sucesso, etc.
    })
    .catch((error) => {
      console.error("Erro ao enviar cadastro:", error);
      // Tratar erros, exibir uma mensagem de erro, etc.
    });
}

// Vincula a função de processamento ao evento de envio do formulário
document
  .getElementById("cadastroForm")
  .addEventListener("submit", processarCadastro);
