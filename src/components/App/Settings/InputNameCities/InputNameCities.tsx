import React, { useState } from 'react'
import Input from '../../../ui/Input/Input'
import styles from './InputNameCities.scss'
import { useDispatch } from 'react-redux';
import { fetchAddCity } from '../../../../assets/scripts/api/fetchWeather';

type Props = {}

function InputNameCities({ }: Props) {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    function onChangeFn(value: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(value.target.value)
    }

    function submitHandle(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetchAddCity(inputValue, dispatch)
    }

    return (
        <form className={styles.form} onSubmit={submitHandle}>
            <Input input={{
                placeholder: 'Name of city',
                value: inputValue,
                type: 'text',
                onChangeFn: onChangeFn
            }} ></Input>
        </form >
    )
}

export default InputNameCities