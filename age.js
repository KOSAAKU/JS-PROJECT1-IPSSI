function getCatHumanAge(catAge) {
    if (catAge < 1) {
        return 0;
    }
    if (catAge === 1) {
        return 15;
    }
    if (catAge === 2) {
        return 24;
    }
    return 24 + (catAge - 2) * 4;
}

document.addEventListener('DOMContentLoaded', () => {
    const ageFormElement = document.getElementById('ageForm');
    const resultElement = document.getElementById('result');

    ageFormElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const catAgeInput = document.getElementById('catAge');
        const catAgeValue = Number(catAgeInput.value);

        if (Number.isNaN(catAgeValue) || catAgeValue < 0) {
            alert('Please enter a valid age for your cat.');
            return;
        }

        const humanAgeValue = getCatHumanAge(catAgeValue);
        const message = `A ${catAgeValue} year old cat is approximately ${humanAgeValue} human years old.`;

        alert(message);
        resultElement.textContent = message;
    });
});

console.log(getCatHumanAge(0));
console.log(getCatHumanAge(1));
console.log(getCatHumanAge(2));
console.log(getCatHumanAge(3));
console.log(getCatHumanAge(5));
console.log(getCatHumanAge(10));
