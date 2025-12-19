function updateClock() {
    const now = new Date();
    
    // Hora
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // Data
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('pt-BR', options).toUpperCase();
}

setInterval(updateClock, 1000);
updateClock(); // Chama na hora pra não ter delay