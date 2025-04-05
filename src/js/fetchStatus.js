export async function fetchStatus(updateTable, updateChart, chartData, chartLabels, maxDataPoints) {
  const apiUrl = "https://pingobras-sg.glitch.me/serverstatus";
  const statusTable = document.getElementById("statusTable");
  const lastUpdated = document.getElementById("lastUpdated");

  statusTable.innerHTML = `<tr><td colspan="4" class="updating">Atualizando...</td></tr>`;
  lastUpdated.textContent = "Atualizando...";

  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    const result = await response.json();
    const data = result.data;
    const updatedAt = new Date(result.lastUpdated);

    lastUpdated.textContent = `Última atualização: ${updatedAt.toLocaleTimeString()}`;
    updateTable(data, chartData, chartLabels, updatedAt.toLocaleTimeString(), maxDataPoints);
    updateChart(chartData, chartLabels);
  } catch (err) {
    console.error(err);
    statusTable.innerHTML = `<tr><td colspan="4" class="error">Erro ao carregar dados</td></tr>`;
    lastUpdated.textContent = "Falha ao atualizar.";
  }
}
