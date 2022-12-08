import React from 'react'
import "../../assets/style/normalize.global.css";
import "../../assets/style/style.global.scss";
import style from './App.scss'
import Countries from './Countries/Countries';
import Settings from './Settings/Settings';
import { Provider } from "react-redux";
import store from '../../assets/hooks/useStore';
import WeatherCards from './WeatherCards/WeatherCards';

type Props = {}

function App({ }: Props) {
    return (
        <Provider store={store}>
            <div className={style.app}>
                <Countries></Countries>
                <Settings></Settings>
                <WeatherCards></WeatherCards>
            </div>
        </Provider >
    )
}

export default App