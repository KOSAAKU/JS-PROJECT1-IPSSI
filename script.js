//////////////////// ENCYCLOPEDIA ENTRY ////////////////////

const cats = [
    {
        "photo": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
        "race": "Abyssin",
        "origin": "Ethiopie",
        "description": "Gabarit athletique, tres curieux et adore grimper partout."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/ai6Jps4sx.jpg",
        "race": "Siamois",
        "origin": "Thailande",
        "description": "Chat bavard et affectueux, cherche toujours la compagnie humaine."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/ME3ugsjMe.jpg",
        "race": "Maine Coon",
        "origin": "Etats-Unis",
        "description": "Geant doux a la fourrure epaisse, aime participer a toutes les activites."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
        "race": "Bengal",
        "origin": "Etats-Unis",
        "description": "Pelage tachete spectaculaire, tres joueur et plein d energie."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
        "race": "Persan",
        "origin": "Iran",
        "description": "Silhouette elegante, temperament calme et besoin quotidien de brossage."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/N-94oSJuf.jpg",
        "race": "Norvegien",
        "origin": "Norvege",
        "description": "Aime les grands espaces, robuste et dote d un sous-poil epais."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/d5i.jpg",
        "race": "Sphynx",
        "origin": "Canada",
        "description": "Chat sans poil, tres tactile et friand de chaleur et d attention."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg",
        "race": "British Shorthair",
        "origin": "Royaume-Uni",
        "description": "Corps massif et calme olympien, prefere les canapes confortables."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/KBroiVNCM.jpg",
        "race": "Ragdoll",
        "origin": "Etats-Unis",
        "description": "Se detend completement dans les bras, ideal pour les foyers tranquilles."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/DbwiefiaY.jpg",
        "race": "Bleu Russe",
        "origin": "Russie",
        "description": "Pelage double court, discret mais tres fidele a sa famille."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/UkeJzQ62A.jpg",
        "race": "Chartreux",
        "origin": "France",
        "description": "Sourire legendaire, agile et adapte a la vie en appartement."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/BkqUm9tez.jpg",
        "race": "Exotic Shorthair",
        "origin": "Etats-Unis",
        "description": "Version a poil court du persan, adore les siestes et les caresses."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/1f1.jpg",
        "race": "Sacre de Birmanie",
        "origin": "Myanmar",
        "description": "Yeux bleus profonds, pattes gant de blanc et caractere equilibre."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    let carrousel = document.getElementById("carrousel");
    const modal = document.getElementById("catModal");
    const closeBtn = document.querySelector(".close");

    // Jouer un son au chargement de la page
    const audio = document.getElementById("audio");
    audio.play();

    // Fonction pour ouvrir la popup avec les informations du chat
    function openModal(cat) {
        document.getElementById("modalImage").src = cat.photo;
        document.getElementById("modalImage").alt = cat.race;
        document.getElementById("modalRace").textContent = cat.race;
        document.getElementById("modalOrigin").textContent = `Origin: ${cat.origin}`;
        document.getElementById("modalDescription").textContent = cat.description;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Empêcher le scroll en arrière-plan
    }

    // Fonction pour fermer la popup
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Réactiver le scroll
    }

    // Création d'une "carte" pour chaque chat
    cats.forEach((cat, index) => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${cat.photo}" alt="${cat.race}">
            <h2>${cat.race}</h2>
            <p>Origin: ${cat.origin}</p>
            <p>${cat.description}</p>
        `;

        // Ajouter un événement de clic sur la carte pour ouvrir la popup
        card.addEventListener('click', () => {
            openModal(cat);
        });

        // Ajouter un style cursor pointer pour indiquer que la carte est cliquable
        card.style.cursor = 'pointer';

        carrousel.appendChild(card);
        console.log(`Loaded cat ${index + 1}: ${cat.race}`);
    });

    // Fermer la popup en cliquant sur le bouton X
    closeBtn.addEventListener('click', closeModal);
});
