//////////////////// ENCYCLOPEDIA ENTRY ////////////////////

const cats = [
  {
    photo: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    breed: "Abyssinian",
    origin: "Ethiopia",
    description: "Athletic and endlessly curious; loves climbing and exploring high places."
  },
  {
    photo: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg",
    breed: "Siamese",
    origin: "Thailand",
    description: "Vocal, affectionate, and people-oriented; thrives on human company."
  },
  {
    photo: "https://cdn2.thecatapi.com/images/unX21IBVB.jpg",
    breed: "Maine Coon",
    origin: "United States",
    description: "Gentle giant with a thick coat; friendly and keen to join every activity."
  },
  {
    photo: "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
    breed: "Bengal",
    origin: "United States",
    description: "Striking rosetted coat; highly playful, energetic, and intelligent."
  },
  {
    photo: "https://cdn2.thecatapi.com/images/8D--jCd21.jpg",
    breed: "Persian",
    origin: "Iran",
    description: "Calm and elegant; enjoys quiet homes and needs regular grooming."
  },
  {
    photo: "https://cdn2.thecatapi.com/images/06dgGmEOV.jpg",
    breed: "Norwegian Forest",
    origin: "Norway",
    description: "Robust climber with a dense undercoat; loves space and tall scratching posts."
  },
  {
    photo: "https://cdn2.thecatapi.com/images/BDb8ZXb1v.jpg",
    breed: "Sphynx",
    origin: "Canada",
    description: "Hairless and very tactile; seeks warmth, cuddles, and constant attention."
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkxtjr-HUsTBYtz02P4FTVqAHGa6KfCHjXJEqEWe71T8opvQVstnl-qImOrTJ0jDHy8jv&s=10",
    breed: "British Shorthair",
    origin: "United Kingdom",
    description: "Solid build and serene temperament; a fan of comfy couches and routine."
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcP4oh9aa8lQUbENRwnXedNggizCvWCLwJm_CBdB-Ha2mrOFbDWIhTANyD3qkHpm6BWJS&s=10",
    breed: "Ragdoll",
    origin: "United States",
    description: "Relaxed and docile; often goes limp when held—great for calm households."
  },
  {
    photo: "https://www.catsbest.fr/wp-content/uploads/katze-russisch-blau-450x450.jpg",
    breed: "Russian Blue",
    origin: "Russia",
    description: "Short, plush double coat; reserved with strangers but deeply loyal at home."
  },
  {
    photo: "https://images.prismic.io/myelmut/Z1w0PZbqstJ98ekU_1.png?auto=format%2Ccompress&rect=47%2C0%2C1653%2C1240&w=3840&fit=max",
    breed: "Chartreux",
    origin: "France",
    description: "Quiet, smiling expression; agile and well-suited to apartment living."
  },
  {
    photo: "https://www.zooplus.fr/magazine/wp-content/uploads/2020/01/exotic-shorthair.webp",
    breed: "Exotic Shorthair",
    origin: "United States",
    description: "Short-haired Persian cousin; affectionate, mellow, and nap-loving."
  },
  {
    photo: "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg",
    breed: "Birman",
    origin: "Myanmar",
    description: "Deep blue eyes and white “gloves”; balanced, gentle, and people-focused."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const carrousel = document.getElementById("carrousel");
  const modal = document.getElementById("catModal");
  const closeBtn = document.querySelector(".close");

  // Play a sound on page load (may require user interaction depending on browser)
  const audio = document.getElementById("audio");
  if (audio && audio.play) { audio.play().catch(() => {}); }

  function openModal(cat) {
    document.getElementById("modalImage").src = cat.photo;
    document.getElementById("modalImage").alt = cat.breed;
    document.getElementById("modalRace").textContent = cat.breed;           // label keeps same id
    document.getElementById("modalOrigin").textContent = `Origin: ${cat.origin}`;
    document.getElementById("modalDescription").textContent = cat.description;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  cats.forEach((cat, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${cat.photo}" alt="${cat.breed}">
      <h2>${cat.breed}</h2>
      <p>Origin: ${cat.origin}</p>
      <p>${cat.description}</p>
    `;
    card.addEventListener('click', () => openModal(cat));
    card.style.cursor = 'pointer';
    carrousel.appendChild(card);
    console.log(`Loaded cat ${index + 1}: ${cat.breed}`);
  });

  closeBtn.addEventListener('click', closeModal);
});
