// Simulação de dados de caronas
const caronas = [
  { origem: "A", destino: "B", data: "2023-05-21", hora: "10:00" },
  { origem: "B", destino: "C", data: "2023-05-22", hora: "14:30" },
  { origem: "C", destino: "D", data: "2023-05-23", hora: "16:45" },
];

// Função para buscar caronas
function buscarCaronas(event) {
  event.preventDefault();

  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  // Filtrar caronas de acordo com os critérios de busca
  const resultados = caronas.filter(
    (caronas) =>
      caronas.origem.toLowerCase() === origem.toLowerCase() &&
      caronas.destino.toLowerCase() === destino.toLowerCase() &&
      caronas.data === data &&
      caronas.hora === hora
  );

  // Exibir os resultados
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  if (resultados.length > 0) {
    resultados.forEach((caronas) => {
      const caronaDiv = document.createElement("div");
      caronaDiv.innerHTML = `
          <p><strong>Origem:</strong> ${caronas.origem}</p>
          <p><strong>Destino:</strong> ${caronas.destino}</p>
          <p><strong>Data:</strong> ${caronas.data}</p>
          <p><strong>Hora:</strong> ${caronas.hora}</p>
          <hr>
        `;
      resultadosDiv.appendChild(caronaDiv);
    });
  } else {
    resultadosDiv.innerHTML = "<p>Nenhuma carona encontrada.</p>";
  }
}

document.getElementById("caronaForm").addEventListener("submit", buscarCaronas);
