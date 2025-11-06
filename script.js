//////////////////// ENCYCLOPEDIA ENTRY ////////////////////

const cats = [
    {
        "photo": "https://media.istockphoto.com/id/1443562748/fr/photo/mignon-chat-gingembre.jpg?s=1024x1024&w=is&k=20&c=4GqVUsgCSR5s0CU2JF3cJ-2-ACDlU6WlHsjOthb7nkM=",
        "race": "test",
        "origin": "test",
        "description": "Putain qu'il est beau ce con"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    let carrousel = document.getElementById("carrousel");

    // Jouer un son au chargement de la page
    const audio = document.getElementById("audio");
    audio.play();

    // Création d'une "carte" pour chaque chat
    cats.forEach(cat => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${cat.photo}" alt="${cat.race}">
            <h2>${cat.race}</h2>
            <p>Origin: ${cat.origin}</p>
            <p>${cat.description}</p>
        `;
        carrousel.appendChild(card);
    });
})

