function ageHumainChat(ageChat) {
    if (ageChat < 1) return 0;
    if (ageChat === 1) return 15;
    if (ageChat === 2) return 24;
    return 24 + (ageChat - 2) * 4;
}
console.log(ageHumainChat(0));
console.log(ageHumainChat(1));
console.log(ageHumainChat(2));
console.log(ageHumainChat(3));
console.log(ageHumainChat(5));
console.log(ageHumainChat(10));