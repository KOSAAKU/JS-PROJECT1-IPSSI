function validateForm() {
    const catName = document.getElementById("catName").value;
    const catRace = document.getElementById("catRace").value;
    const catOrigin = document.getElementById("catOrigin").value;
    const catDescription = document.getElementById("catDescription").value;


    if (catName.length < 2 || catName.length > 30 || !/^[a-zA-ZA\s-]+$/.test(catName)) {
        alert("Le nom du chat doit contenir entre 2 et 30 caractères et ne contenir que des lettres.");
        return false;
    }
    if (!catRace) {
        alert("Veuillez sélectionner une race.");
        return false;
    }

    if (!catOrigin) {
        alert("Veuillez sélectionner une race.");
        return false;
    }

    const photoInput = document.getElementById("catPhoto");
    if (photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const fileType = file.type;
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        
        if (!validImageTypes.includes(fileType)) {
            alert("Veuillez choisir une image valide (JPEG, PNG ou GIF).");
            return false;
        }

        if (file.size > 5 * 1024 * 1024) { 
            alert("La taille de l'image ne doit pas dépasser 5MB.");
            return false;
        }
    }

    if (catDescription.length < 10 || catDescription.length > 500) {
        alert("La description doit contenir entre 10 et 500 caractères.");
        return false;
    }
    alert("Formulaire envoyé avec succès !");
    return true;
}

document.getElementById("catPhoto").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            console.log("Image chargée :", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});
