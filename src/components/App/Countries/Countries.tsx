import React from 'react'
import styles from './Countries.scss'


type Props = {}

function Countries({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.description}>FAVORITE COUNTRIES</div>
            <div className={styles.countrie}>
                <p className={styles.countrie__name}>Russia</p>
                <div className={styles.options}>
                    <svg viewBox="0 0 100 100" width="10" height="10">
                        <polygon points="0,0 100,0 50,100"
                            fill="#0028F3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Countries