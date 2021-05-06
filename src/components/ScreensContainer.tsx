import React from "react";
import s from './Counter.module.css'

type ScreensContainerPropsType = {
    settings: boolean
    value: number
    minValue: number
    maxValue: number

}

export const ScreensContainer: React.FC<ScreensContainerPropsType> = ({settings, value, minValue, maxValue}) => {

    return settings
        ? <div className={s.screenContainer}>
            minim value : <input value={minValue}/>
            maxim value : <input value={maxValue}/>
        </div>
        : <div className={s.screenContainer + ' ' + s.screenCounter}>{value}</div>
}