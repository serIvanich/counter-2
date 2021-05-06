import React from "react";
import s from './Counter.module.css'
import {ScreensContainer} from "./ScreensContainer";
import {ButtonsContainer} from "./ButtonsContainer";

type CounterContainerPropsType = {
    settings: boolean
    value: number
    minValue: number
    maxValue: number
    changeValue: () => void
    resetValue: () => void
    onSettings: () => void
}

export const CounterContainer: React.FC<CounterContainerPropsType> = ({settings, value,minValue,
                                                                          maxValue,  changeValue, onSettings,resetValue}) => {

    return <div className={s.counterContainer} >
        <ScreensContainer settings={settings} value={value} minValue={minValue} maxValue={maxValue}/>
        <ButtonsContainer settings={settings} changeValue={changeValue} onSettings={onSettings} resetValue={resetValue}/>

    </div>
}