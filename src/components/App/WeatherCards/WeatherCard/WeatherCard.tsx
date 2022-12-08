import React from 'react'
import { ICard } from '../WeatherCards'
import styles from './WeatherCard.scss'

type Props = {
    card: ICard,
    index: number
}

function WeatherCard({ card, index }: Props) {
    const dateObj = new Date(card.dt_txt)
    const date = dateObj.toLocaleString('en-us', { weekday: 'long', month: 'long', day: 'numeric' })

    return (
        <li className={`${styles.card__item} card${index}`}>
            <div className={styles.title}>
                <p className={styles.title__date}>{date}</p>
                <img className={styles.title__icon}
                    src={`http://openweathermap.org/img/w/${card.weather[0].icon}.png`}
                    alt="icon" />
                <p className={styles.title__description}>{card.weather[0].description}</p>
            </div>
            <div className={styles.main}>
                <p className={styles.main__temp}>Avg.temp: {card.main.temp} °C</p>
                <p>Pressure: {card.main.pressure} mb</p>
                <p>Wind speed: {card.wind.speed} m/s</p>
            </div>
        </li>
    )
}

export default WeatherCard