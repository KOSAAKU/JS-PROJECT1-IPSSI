function validateForm() {
    // Récupération des valeurs du formulaire
    const catName = document.getElementById("catName").value;
    const catAge = document.getElementById("catAge").value;
    const catBreed = document.getElementById("catBreed").value;
    const catWeight = document.getElementById("catWeight").value;
    const ownerEmail = document.getElementById("ownerEmail").value;
    const description = document.getElementById("description").value;

    // Validation du nom (2-30 caractères, lettres uniquement)
    if (catName.length < 2 || catName.length > 30 || !/^[a-zA-ZÀ-ÿ\s-]+$/.test(catName)) {
        alert("Le nom du chat doit contenir entre 2 et 30 caractères et ne contenir que des lettres.");
        return false;
    }

    // Validation de l'âge
    if (catAge < 0 || catAge > 30) {
        alert("L'âge du chat doit être compris entre 0 et 30 ans.");
        return false;
    }

    // Validation de la race
    if (!catBreed) {
        alert("Veuillez sélectionner une race.");
        return false;
    }

    // Validation du poids
    if (catWeight <= 0 || catWeight > 25) {
        alert("Le poids doit être compris entre 0 et 25 kg.");
        return false;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(ownerEmail)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    // Validation de la photo
    const photoInput = document.getElementById("catPhoto");
    if (photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const fileType = file.type;
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        
        if (!validImageTypes.includes(fileType)) {
            alert("Veuillez choisir une image valide (JPEG, PNG ou GIF).");
            return false;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB max
            alert("La taille de l'image ne doit pas dépasser 5MB.");
            return false;
        }
    }

    // Si tout est valide, on affiche un message de succès
    alert("Formulaire envoyé avec succès !");
    return true;
}

// Prévisualisation de l'image
document.getElementById("catPhoto").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Vous pouvez ajouter ici le code pour afficher la prévisualisation
            console.log("Image chargée :", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});
