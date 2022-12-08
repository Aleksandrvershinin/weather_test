import { getCities, getCurrentCity, setCurrentCity } from "../api/localStorage"
import { addCity, changeCurrentCity, removeCity } from "./typesActionRedux"
const cities: Array<string> = getCities()

interface IAddCity {
    type: typeof addCity,
    payload: string
}

interface IRemoveCity {
    type: typeof removeCity,
    payload: string
}

interface IChangeCurrentCity {
    type: typeof changeCurrentCity,
    payload: string
}
export type TCitiesActions = IAddCity | IRemoveCity | IChangeCurrentCity

const initState = {
    cities: getCities(),
    currentCity: getCurrentCity()
}
export const citiesReducer = (state = initState, action: TCitiesActions) => {
    switch (action.type) {
        case addCity:
            state.cities.push(action.payload)
            return { ...state, cities: [...state.cities] }
        case removeCity:
            const cities = state.cities.filter(city => {
                return city !== action.payload
            })
            return { ...state, cities: [...cities] }
        case changeCurrentCity:
            setCurrentCity(action.payload)
            return { ...state, currentCity: action.payload }
        default:
            return state
    }
}