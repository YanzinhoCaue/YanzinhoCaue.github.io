// --- RELÓGIO ---
function updateClock() {
    const now = new Date();
    
    // Hora
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockEl = document.getElementById('clock');
    if(clockEl) clockEl.textContent = `${hours}:${minutes}:${seconds}`;

    // Data
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const dateEl = document.getElementById('date');
    if(dateEl) dateEl.textContent = now.toLocaleDateString('pt-BR', options).toUpperCase();
}

setInterval(updateClock, 1000);
updateClock(); 

// --- TERMINAL GITHUB (A PARTE QUE FALTAVA) ---
async function fetchGitHubActivity() {
    const container = document.getElementById('github-feed');
    const username = 'YanzinhoCaue';
    
    if (!container) return; // Segurança caso o elemento não exista

    try {
        // Busca os últimos 4 eventos públicos
        const res = await fetch(`https://api.github.com/users/${username}/events?per_page=4`);
        
        if (!res.ok) throw new Error('Falha na conexão');
        
        const data = await res.json();
        container.innerHTML = ''; // Limpa o texto "LOADING..."

        data.forEach((event, index) => {
            // Formata a data (dia/mês)
            const date = new Date(event.created_at).toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit'});
            
            // Define o ícone e ação baseada no tipo de evento
            let action = 'UPDATE';
            let icon = 'fas fa-pen'; // Default
            let colorClass = '';

            if (event.type === 'PushEvent') {
                action = 'PUSH';
                icon = 'fas fa-code-branch';
                colorClass = 'color-push';
            } else if (event.type === 'WatchEvent') {
                action = 'STAR';
                icon = 'fas fa-star';
                colorClass = 'color-star';
            } else if (event.type === 'CreateEvent') {
                action = 'CREATE';
                icon = 'fas fa-plus';
                colorClass = 'color-create';
            } else if (event.type === 'PullRequestEvent') {
                action = 'PR';
                icon = 'fas fa-code-pull-request';
            }

            // Limpa o nome do repo
            const repoName = event.repo.name.replace(`${username}/`, '');

            // Cria o elemento HTML
            const item = document.createElement('div');
            item.className = 'feed-item';
            item.style.animationDelay = `${index * 0.2}s`; // Efeito cascata
            
            item.innerHTML = `
                <span class="feed-arrow">></span>
                <span class="feed-date">[${date}]</span>
                <i class="${icon} ${colorClass}" style="font-size: 0.7rem;"></i>
                <span class="feed-action ${colorClass}">${action}</span>
                <span class="feed-repo">${repoName}</span>
            `;
            
            container.appendChild(item);
        });

    } catch (err) {
        container.innerHTML = '<span style="color: #ff4444; font-size: 0.8rem;">> CONNECTION_ERR: OFFLINE</span>';
        console.error(err);
    }
}

// Inicia o terminal assim que carrega
fetchGitHubActivity();
