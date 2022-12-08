import React, { useEffect } from 'react'
import { useTypeSelector } from '../../../../assets/hooks/useTypeSelector'
import { setCities } from '../../../../assets/scripts/api/localStorage'
import styles from './Cities.scss'
import City from './City/City'

type Props = {}



function Sities({ }: Props) {
    const cities = useTypeSelector(state => state.citiesReducer.cities)

    useEffect(() => {
        setCities(cities)
    }, [cities])


    return (
        <ul className={styles.container}>
            {cities.map((sityName, index) => {
                return (
                    <City key={index} sityName={sityName}></City>
                )
            })}
        </ul>
    )
}

export default Sities