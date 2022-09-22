import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li id="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

