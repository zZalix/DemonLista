
const playersData =[
    { 
        rank: 1, flagText: 'IT', name: 'zZalix', score: '525', state: 'ITALY',
        hardest: { demon: 'Cataclysm', hz: '144hz' }
    },
    { 
        rank: 2, flagText: 'IT', name: 'robZeph', score: '185', state: 'ITALY',
        hardest: { demon: 'tower descent', hz: '360hz' }
    },
    { 
        rank: 3, flagText: 'IT', name: 'klockish', score: '125', state: 'ITALY',
        hardest: { demon: 'B', hz: '240hz' }
    },
    { 
        rank: 4, flagText: 'IT', name: 'mainsciamn', score: '85', state: 'ITALY',
        hardest: { demon: 'B', hz: '160hz' }
    },
     { 
        rank: 5, flagText: 'IT', name: 'zleemm', score: '80', state: 'ITALY',
        hardest: { demon: 'FlashBang', hz: '144hz' }
    },
    { 
        rank: 6, flagText: 'IT', name: 'UniversoMC', score: '75', state: 'ITALY',
        hardest: { demon: 'Skeletal Shenanigans', hz: '165hz' }
    },
    { 
        rank: 7, flagText: 'IT', name: 'b0bX2', score: '30', state: 'ITALY',
        hardest: { demon: 'FlashBang', hz: '360hz' }
    },
    
];

const playerListContainer = document.getElementById('playerList');
const detailsArea = document.getElementById('detailsArea');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

// Mostra il demone più difficile
function showPlayerDetails(player) {
    detailsArea.innerHTML = `
        <div class="details-header">
            <div class="details-title">
                <h1><span class="it-text">${player.flagText}</span> ${player.name}</h1>
                <p class="details-subtitle">RANK #${player.rank} • ${player.state}</p>
            </div>
            <div class="details-score">
                <h2>${player.score}</h2>
                <p>TOTAL SCORE</p>
            </div>
        </div>

        <div class="records-section">
            <h3>Hardest Demon</h3>
            <div class="record-card">
                <div>
                    <div class="record-name">${player.hardest.demon}</div>
                </div>
                <div class="record-hz">${player.hardest.hz}</div>
            </div>
        </div>
    `;
}

// Genera la lista
function renderList(data, playerToSelect = null) {
    playerListContainer.innerHTML = ''; 

    data.forEach((player, index) => {
        const row = document.createElement('div');
        row.classList.add('player-row');
        
        row.innerHTML = `
            <div class="row-left">
                <span class="player-rank">#${player.rank}</span>
                <span class="player-flag">${player.flagText}</span>
                <span class="player-name">${player.name}</span>
            </div>
            <span class="player-score">${player.score}</span>
        `;

        row.addEventListener('click', () => {
            document.querySelectorAll('.player-row').forEach(el => el.classList.remove('active'));
            row.classList.add('active');
            showPlayerDetails(player);
        });

        playerListContainer.appendChild(row);

        // Autoclick
        if (playerToSelect && player.name === playerToSelect.name) {
            row.click();
        } else if (!playerToSelect && index === 0) {
            row.click();
        }
    });
}

renderList(playersData);

// Ricerca
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = playersData.filter(p => p.name.toLowerCase().includes(term));
    renderList(filtered, filtered.length > 0 ? filtered[0] : null);
});

clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    renderList(playersData);
});


// --- GENERATORE DEI QUADRATI BLU (Ora fitti come la tua foto!) ---
function generateSquares(containerId) {
    const container = document.getElementById(containerId);
    // Tonalità di blu fedeli a Pointercrate
    const colors =['#0F5A8C', '#1884C7', '#319AE2', '#49B0F7']; 
    const amount = 45; // Aumentato per riempire bene i lati
    
    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div');
        square.classList.add('blue-square');
        
        // Dimensioni: da 50px a 130px
        const size = Math.floor(Math.random() * 80) + 50;
        
        // Posizionamento su tutto lo schermo
        const top = Math.random() * 100; // Verticale (0% a 100%)
        const left = Math.random() * 70; // Orizzontale (per farli rimanere attaccati ai bordi)
        
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Applico lo stile
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.top = `${top}vh`;
        
        if (containerId === 'left-squares') {
            square.style.left = `${left}%`;
        } else {
            square.style.right = `${left}%`;
        }
        
        square.style.backgroundColor = color;
        // Meno trasparenti, più solidi e sovrapposti come nella tua immagine
        square.style.opacity = Math.random() * 0.3 + 0.7; 

        container.appendChild(square);
    }
}

// Avvia la generazione dei quadrati
generateSquares('left-squares');
generateSquares('right-squares');
