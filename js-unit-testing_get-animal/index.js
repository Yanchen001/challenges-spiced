export function getAnimal(animalPluralName) {
    if (animalPluralName === "cats") {
        return "I totally love cats!"
    }

    if (typeof animalPluralName === "string") {
        return `I like ${animalPluralName}!`
    }

    if (animalPluralName === undefined) {
        return "I do not like animals at all!"
    }
}
