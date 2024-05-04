document.addEventListener("DOMContentLoaded", function() {
  /* Extrair parâmetros da URL */
  const urlParams = new URLSearchParams(window.location.search);

  /* Obter os valores dos parâmetros */
  const nome = urlParams.get('nome');
  const nickname = urlParams.get('nick');
  const email = urlParams.get('email');
  const senha = urlParams.get('senha');

  /* Inserir dados na tabela */
  const corpoTabela = document.getElementById("corpoTabela");
  const novaLinha = corpoTabela.insertRow();

  const cells = [
      { value: nome, class: 'borda-topo borda-direita borda-esquerda borda-baixo' },
      { value: nickname, class: 'borda-topo borda-esquerda borda-direita borda-baixo' },
      { value: email, class: 'borda-topo borda-direita borda-esquerda borda-baixo' },
      { value: senha, class: 'borda-direita borda-baixo borda-topo borda-esquerda' }
  ];

  cells.forEach(cellData => {
      const cell = novaLinha.insertCell();
      cell.textContent = cellData.value;
      cell.className = cellData.class;
  });
});
