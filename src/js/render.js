export function updateTable(data, chartData, chartLabels, timeLabel, maxDataPoints) {
    const statusTable = document.getElementById("statusTable");
    statusTable.innerHTML = "";
  
    chartLabels.push(timeLabel);
    if (chartLabels.length > maxDataPoints) chartLabels.shift();
  
    data.forEach((site) => {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = site.name;
      row.appendChild(nameCell);
  
      const urlCell = document.createElement("td");
      const urlLink = document.createElement("a");
      urlLink.href = site.url;
      urlLink.textContent = site.url;
      urlLink.target = "_blank";
      urlCell.appendChild(urlLink);
      row.appendChild(urlCell);
  
      const statusCell = document.createElement("td");
      if (site.status === "online") {
        statusCell.textContent = "🟢 Online";
        statusCell.className = "online";
      } else {
        statusCell.textContent = "🔴 Offline";
        statusCell.className = "offline";
      }
      row.appendChild(statusCell);
  
      const timeCell = document.createElement("td");
      if (site.status === "online") {
        timeCell.textContent = `${site.time} ms`;
        if (!chartData[site.name]) chartData[site.name] = [];
        chartData[site.name].push(site.time);
        if (chartData[site.name].length > maxDataPoints) {
          chartData[site.name].shift();
        }
      } else {
        timeCell.textContent = site.error || "Erro desconhecido";
        timeCell.className = "error";
      }
      row.appendChild(timeCell);
  
      statusTable.appendChild(row);
    });
  }
  