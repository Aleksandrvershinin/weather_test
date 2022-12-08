import React from 'react'
import styles from './City.scss'
import { useDispatch } from 'react-redux';
import { changeCurrentCity, removeCity } from '../../../../../assets/scripts/myRedux/typesActionRedux';
import removeIcon from '../../../../../assets/img/delete_icon.svg'
import { useTypeSelector } from '../../../../../assets/hooks/useTypeSelector';

type Props = {
    sityName: string
}

function City({ sityName }: Props) {
    const nameCurrentCity = useTypeSelector(state => state.citiesReducer.currentCity)
    const dispatch = useDispatch()

    function clickRemoveHandle() {
        dispatch({ type: removeCity, payload: sityName })
    }

    function clickChangeCurrentCity() {
        dispatch({ type: changeCurrentCity, payload: sityName })
    }

    const activeCity = nameCurrentCity === sityName ? styles.active__city : ''
    return (
        <li className={styles.item}>
            <div
                onClick={clickChangeCurrentCity}
                className={`${styles.sity__name} ${activeCity}`}>
                {sityName}
            </div>
            <button onClick={clickRemoveHandle} className={styles.button}>
                <img className={styles.remove__icon} src={removeIcon} />
            </button>
        </li>
    )
}

export default City