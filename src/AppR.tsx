import React, {useEffect, useState} from 'react';
import './AppR.css';
import {Screen} from "./components/Screen/Screen";
import {BoardControl} from "./components/BoardControl/BoardControl";
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";

export type ErrorType = '' | 'errorValue' | 'errorSettings'

function AppR() {

    // const startNumber = (): number => {
    //     const min = Number(localStorage.getItem('minValue'))
    //     return min ? min : 0
    // }
    // const maxNumber = (): number => {
    //     const max = Number(localStorage.getItem('maxValue'))
    //     return max ? max : 5
    // }
    //
    //
    // const [minValue, setMinValue] = useState<number>(startNumber())
    // const [maxValue, setMaxValue] = useState<number>(maxNumber())
    // const [value, setValue] = useState(minValue)
    const [settings, setSettings] = useState(true)
    // const [error, setError] = useState<ErrorType>('')
    //
    //
    // useEffect(() => {
    //     if (!settings && minValue > value) {
    //         setValue(minValue)
    //     } else if (!settings && maxValue < value) {
    //         setError('errorValue')
    //     } else if (settings && error !== '') {
    //         setError('')
    //     }
    // }, [settings])
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //
    // }, [minValue, maxValue])
    //
    // const changeCounterValue = () => {
    //     value >= maxValue ? setError('errorValue') : setValue(value + 1)
    // }
    // const onSettings = () => {
    //     setSettings(!settings)
    //
    // }
    //
    // const resetValue = () => {
    //     setValue(minValue)
    //     setError('')
    // }
    //
    // const changeMinValue = (minValue: number) => {
    //     if ((minValue <= maxValue && error === 'errorSettings')) {
    //         setError('')
    //         setMinValue(minValue)
    //     } else if ((minValue <= maxValue && error === '')) {
    //         setMinValue(minValue)
    //     } else {
    //         setError('errorSettings')
    //
    //     }
    // }
    // const changeMaxValue = (maxValue: number) => {
    //     if ((maxValue >= minValue && error === 'errorSettings')) {
    //         setError('')
    //         setMaxValue(maxValue)
    //     } else if ((maxValue >= minValue && error === '')) {
    //         setMaxValue(maxValue)
    //     } else {
    //         setError('errorSettings')
    //     }
    //
    // }

    return (
        <div >
            {settings?<Counter changeSettings={setSettings}/>:<SettingCounter changeSettings={setSettings}/>}





        </div>
    );
}

export default AppR;
