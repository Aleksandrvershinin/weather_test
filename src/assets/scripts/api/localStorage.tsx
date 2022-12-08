const CITIES = 'CITIES'
const CURRENTCITY = 'CURRENTCITY'

export function setCities(cities: Array<string>) {
    localStorage.setItem(CITIES, JSON.stringify(cities))
}

export function getCities() {
    const json = localStorage.getItem(CITIES)
    if (!json) return []
    const cities = JSON.parse(json)
    if (!Array.isArray(cities)) return []
    return cities
}

export function setCurrentCity(currentCity: string) {
    localStorage.setItem(CURRENTCITY, currentCity)
}

export function getCurrentCity() {
    const currentCity = localStorage.getItem(CURRENTCITY)
    if (typeof currentCity === 'string') {
        return currentCity
    }
    return ''
}
