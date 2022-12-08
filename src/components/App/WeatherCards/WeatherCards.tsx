import React, { useEffect, useState } from 'react'
import { useTypeSelector } from '../../../assets/hooks/useTypeSelector'
import { fetchShowWeather } from '../../../assets/scripts/api/fetchWeather'
import WeatherCard from './WeatherCard/WeatherCard'
import styles from './WeatherCards.scss'

export interface ICard {
    dt_txt: string,
    main: {
        temp: number,
        pressure
    },
    wind: {
        speed: number
    },
    weather: [{
        icon: string,
        description: string
    }],
}

type Props = {}

function WeatherCards({ }: Props) {
    const [cards, setCards] = useState<Array<object>>([])
    const currentCity = useTypeSelector(state => state.citiesReducer.currentCity)

    useEffect(() => {
        if (currentCity === '') return
        const res = fetchShowWeather(currentCity)
        res.then(res => {
            if (res.list) {
                let day: null | number = null
                const count = 5
                const list: Array<object> = []
                res.list.map((item: any) => {
                    const date = new Date(item.dt_txt)
                    if (day !== date.getDate() && list.length < 5) {
                        const hours = date.getHours()
                        if (hours === 12) {
                            day = date.getDate()
                            list.push(item)
                        }
                    }
                })
                setCards(list)
            }
        })
    }, [currentCity])


    return (
        <ul className={styles.cards__list}>
            {cards &&
                cards.map((item: any, index: number) => {
                    return (
                        <WeatherCard
                            key={index}
                            card={item}
                            index={index} />
                    )
                })
            }
        </ul>
    )
}

export default WeatherCards