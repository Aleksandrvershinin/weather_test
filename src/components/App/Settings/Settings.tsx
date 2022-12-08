import React from 'react'
import styles from './Settings.scss'
import Sities from './Cities/Cities'
import InputNameCities from './InputNameCities/InputNameCities'

type Props = {}

function Settings({ }: Props) {

    return (
        <div className={styles.container}>
            <Sities></Sities>
            <InputNameCities></InputNameCities>
        </div>
    )
}

export default Settings