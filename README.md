## 🖥️ Status Page - Monitoramento de Sites

Este projeto é uma **página de status em tempo real** que monitora a disponibilidade e o tempo de resposta de sites hospedados em servidores da Pingobras S.A.  
Ele exibe os resultados em uma tabela com atualização automática e gráficos dinâmicos usando [Chart.js](https://www.chartjs.org/).

### 🔧 Tecnologias Utilizadas
- HTML5 + CSS3
- JavaScript ES6 (com `type="module"`)
- Chart.js (para gráficos dinâmicos)
- API externa via `fetch`
- Hospedagem compatível com GitHub Pages

### ⚙️ Funcionalidades
- Consulta periódica dos servidores usando `fetch`.
- Atualização automática a cada *n* segundos (configurável).
- Tabela com status dos sites (online/offline e tempo de resposta).
- Gráfico interativo com o histórico recente de resposta de cada site.
- Códigos modularizados em arquivos JS separados.

### 💡 Como surgiu?
Esse projeto nasceu da necessidade de monitorar visualmente a saúde de servidores hospedados, principalmente para uso interno da Pingobras.  
A estrutura modular e visual foi desenvolvida com o auxílio do **ChatGPT da OpenAI**, que colaborou com a refatoração, organização e boas práticas do código.  
Sem ele, provavelmente estaria tudo em um único arquivo enorme! 😅

### 🚀 Como testar
Você pode rodar localmente ou hospedar facilmente no GitHub Pages. Basta clonar o repositório e ativar a página no menu `Settings > Pages`.
