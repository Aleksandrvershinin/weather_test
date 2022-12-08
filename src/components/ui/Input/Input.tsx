import React from 'react'
import styles from './Input.scss'

type Props = {
    input: {
        placeholder: string,
        value: string,
        className?: string,
        onChangeFn?: React.ChangeEventHandler<HTMLInputElement> | undefined
        type: string,
    }
}

function Input({ input }: Props) {

    return (
        <input
            className={styles.input}
            type={input.type}
            placeholder={input.placeholder}
            defaultValue={input.value}
            onChange={input.onChangeFn}
        />
    )
}

export default Input