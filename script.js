//////////////////// ENCYCLOPEDIA ENTRY ////////////////////

const cats = [
    {
        "photo": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
        "race": "Abyssinian",
        "origin": "Ethiopia",
        "description": "Athletic build, very curious and loves to climb everywhere."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg",
        "race": "Siamese",
        "origin": "Thailand",
        "description": "Talkative and affectionate cat, always seeks human company."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/unX21IBVB.jpg",
        "race": "Maine Coon",
        "origin": "United States",
        "description": "Gentle giant with thick fur, loves to participate in all activities."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
        "race": "Bengal",
        "origin": "United States",
        "description": "Spectacular spotted coat, very playful and full of energy."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/8D--jCd21.jpg",
        "race": "Persian",
        "origin": "Iran",
        "description": "Elegant silhouette, calm temperament and daily brushing needed."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/06dgGmEOV.jpg",
        "race": "Norwegian Forest",
        "origin": "Norway",
        "description": "Loves wide open spaces, robust and equipped with thick undercoat."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/BDb8ZXb1v.jpg",
        "race": "Sphynx",
        "origin": "Canada",
        "description": "Hairless cat, very tactile and loves warmth and attention."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/_4Aq8O6e6.jpg",
        "race": "British Shorthair",
        "origin": "United Kingdom",
        "description": "Massive body and olympic calmness, prefers comfortable couches."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/oGvStatRe.jpg",
        "race": "Ragdoll",
        "origin": "United States",
        "description": "Completely relaxes in your arms, ideal for calm households."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/Rhj-JsTLP.jpg",
        "race": "Russian Blue",
        "origin": "Russia",
        "description": "Short double coat, discreet but very loyal to its family."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/Z5llOwN5I.jpg",
        "race": "Chartreux",
        "origin": "France",
        "description": "Legendary smile, agile and adapts well to apartment living."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/wpK2GtlaD.jpg",
        "race": "Exotic Shorthair",
        "origin": "United States",
        "description": "Short-haired version of Persian, loves naps and cuddles."
    },
    {
        "photo": "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg",
        "race": "Birman",
        "origin": "Myanmar",
        "description": "Deep blue eyes, white-gloved paws and balanced character."
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
