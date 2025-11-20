
// personnage 1
let alicia = {
    name: "Alicia Keys",
    health: 10,
    attack: 6,
    precision: 0.5
};

// personnage 2
let lucie = {
    name: "Lucie",
    health: 10,
    attack: 5,
    precision: 0.7
};

// fonction de précision
function precision(personnage) {
    return Math.random() < personnage.precision;
}

// fonction attaque
function attaque(attaquant, cible) {
    if (precision(attaquant)) {
        cible.health -= attaquant.attack;
        console.log(
            attaquant.name + " a attaqué " + cible.name +
            " et enlève " + attaquant.attack + " points de vie."
        );
    } else {
        console.log(
            attaquant.name + " a raté son attaque contre " + cible.name + "."
        );
    }
}

// boucle de combat
while (alicia.health > 0 && lucie.health > 0) {

    attaque(alicia, lucie);

    if (lucie.health <= 0) {
        console.log("Alicia Keys a gagné !");
        break;
    }

    attaque(lucie, alicia);

    if (alicia.health <= 0) {
        console.log("Lucie a gagné !");
        break;
    }
}
