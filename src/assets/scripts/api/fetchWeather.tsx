import { Dispatch } from "react";
import { TCitiesActions } from "../myRedux/citiesReducer";
import { changeCurrentCity } from "../myRedux/typesActionRedux";

async function fetchWeather(sityName: string) {
    const req = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${sityName}&appid=1aad4238c55c3c87530f7c815f71f79e&units=metric`)
    return await req.json()
}

export async function fetchAddCity(sityName: string, dispatch: Dispatch<TCitiesActions>) {
    try {
        const res = await fetchWeather(sityName)
        if (res.city.name && res.city.country) {
            const cityNameWithCountry = res.city.name + ',' + res.city.country
            dispatch({ type: "addCity", payload: cityNameWithCountry })
            dispatch({ type: changeCurrentCity, payload: cityNameWithCountry })
        }
    } catch (error) {
        if (error.message = 'city not found') {
            alert(error.message)
        } else {
            throw error
        }
    }
}

export async function fetchShowWeather(sityName: string) {
    try {
        return await fetchWeather(sityName)
    } catch (error) {
        if (error.message = 'city not found') {
            alert(error.message)
        } else {
            throw error
        }
    }
}