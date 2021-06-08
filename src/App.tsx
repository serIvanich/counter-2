import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {selectSettings, selectSettingValue, selectValue} from "./redux/selectors";
import {changeSettingMaxValue, changeSettingMinValue, changeSettings, changeValue, resetValue} from "./redux/action";

export type ErrorType = '' | 'errorValue' | 'errorSettings'

function App() {

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
    // const settings = useSelector(selectSettings)

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

    const [error, setError] = useState<ErrorType>('')


    const value = useSelector(selectValue)
    const settings = useSelector(selectSettings)

   const {minValue, maxValue} = useSelector(selectSettingValue)

    useEffect(() => {
        if (value > maxValue) {
            setError('errorValue')
        }else if(value < maxValue && error === 'errorValue') {
            setError('')
        }
    }, [value])


    const dispatch = useDispatch()


    const changeSettingsValue = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.currentTarget.dataset.input_name === 'min value') {
            dispatch(changeSettingMinValue(Number(e.currentTarget.value)))
        }else if (e.currentTarget.dataset.input_name === 'max value'){
            dispatch(changeSettingMaxValue(Number(e.currentTarget.value)))
        }


    }

    const changeCallback = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        switch (e.currentTarget.dataset.button_name) {
            case 'inc':

                return dispatch(changeValue())
            case 'reset':
                return dispatch(resetValue())
            case 'setTrue':
                return dispatch(changeSettings(true))
            case 'setFalse':
                return dispatch(changeSettings(false))
            default:
                return 'error'
        }
    }



    return (
        <div>
            {settings ? <Counter value={value} changeCallback={changeCallback}
                                 error={error} />
                : <SettingCounter minValue={minValue} maxValue={maxValue}
                    changeSettingsValue={changeSettingsValue} changeCallback={changeCallback}

                />}


        </div>
    );
}

export default App;
