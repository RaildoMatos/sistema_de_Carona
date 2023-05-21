// Função para processar o cadastro de usuário
function cadastrarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Validar os campos (adapte de acordo com suas necessidades)
  if (!nome || !email || !senha) {
    exibirMensagem("Por favor, preencha todos os campos.", "erro");
    return;
  }

  // Simulação do cadastro (exemplo)
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
  };

  // Salvar o usuário no banco de dados, enviar para o servidor, etc. (exemplo)
  salvarUsuario(usuario);

  exibirMensagem("Cadastro realizado com sucesso!", "sucesso");

  // Limpar o formulário após o cadastro
  document.getElementById("cadastroForm").reset();
}

// Função para salvar o usuário (exemplo)
function salvarUsuario(usuario) {
  // Simulação de salvamento do usuário
  console.log("Usuário salvo com sucesso!");
}
