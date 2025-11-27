//Developed by Cristian Ceni 2025, all the rights are reserved

// Array delle recensioni
const recensioni = [
    {
        stars: 5,
        testo: "Servizio di manicure eccellente, professionale e accurato. L’onicotecnica è gentile, disponibile, attenta alla pulizia e offre consigli utili. Risultato impeccabile a un prezzo giusto. Consigliata vivamente.",
        autore: "Lucia M.",
        lavori: [
            {
                img: "img/lavori/lucia.jpg",
                alt: "Lavoro per Lucia 1"
            }
        ]
    },
    {
        stars: 5,
        testo: "Ari è precisa e creativa, specialmente nelle decorazioni. Pur essendo autodidatta è molto professionale e usa prodotti nuovi e sterilizzati. È solare, disponibile e fa sentire a proprio agio. Risultato sempre soddisfacente.",
        autore: "Eva L.",
        lavori: [
            {
                img: "img/lavori/eva1.jpeg",
                alt: "Lavoro per Eva 1"
            },
            {
                img: "img/lavori/eva2.jpeg",
                alt: "Lavoro per Eva 2"
            },
            {
                img: "img/lavori/eva3.jpeg",
                alt: "Lavoro per Eva 3"
            }
        ]
    },
    {
        stars: 5,
        testo: "Ari è una brava ragazza sia a livello interpersonale con le clienti sia come lavoratrice, fa sentire a proprio agio e sa come lavorare. I prodotti che usa sono di qualità e durevoli e presenta una grande creatività e maestria nella creazione delle decorazioni delle unghie. Sa soddisfare le richieste delle clienti, sia dalla forma dell'unghia fino al completamento dell'opera, come ha fatto nel mio caso.",
        autore: "Aurora F.",
        lavori: [
            {
                img: "img/lavori/aurora.jpeg",
                alt: "Lavoro per Aurora 1"
            }
        ]
    }
];

// Funzione per creare le stelle
const creaStelle = (numero) => '★'.repeat(numero);

// Funzione per creare la galleria dei lavori
const creaGalleriaLavori = (lavori, cliente) => {
    return `
        <div class="recensione-lavori">
            <p class="lavori-caption">I lavori di ${cliente}:</p>
            <div class="recensione-gallery">
                ${lavori.map(lavoro => `
                    <img src="${lavoro.img}" alt="${lavoro.alt}" loading="lazy">
                `).join('')}
            </div>
        </div>
    `;
};

// Funzione per creare una singola recensione
const creaRecensione = (recensione) => {
    const nomeCliente = recensione.autore.split(' ')[0]; // Prende solo il nome
    return `
        <div class="recensione-card animate__animated animate__fadeIn">
            <div class="recensione-stars">${creaStelle(recensione.stars)}</div>
            <p class="recensione-testo">"${recensione.testo}"</p>
            <div class="recensione-autore">- ${recensione.autore}</div>
            ${creaGalleriaLavori(recensione.lavori, nomeCliente)}
        </div>
    `;
};

// Funzione per inizializzare le recensioni
const inizializzaRecensioni = () => {
    const containerRecensioni = document.querySelector('.recensioni-container');
    if (containerRecensioni) {
        containerRecensioni.innerHTML = recensioni.map(creaRecensione).join('');
    }
};

// Inizializza quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', inizializzaRecensioni);