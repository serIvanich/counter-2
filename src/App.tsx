import React, {ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectSettings, selectSettingsValue, selectValue} from "./redux/selectors";
import {changeSettingMaxValue, changeSettingMinValue, changeSettings, changeValue, resetValue} from "./redux/action";
import {store} from "./redux/store";
import {ErrorType, SettingsValueType} from "./redux/counter-reducer";


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


    const value: number = useSelector(selectValue)

    const settings: boolean = useSelector(selectSettings)
    const error: ErrorType = useSelector(selectError)
    const {minValue, maxValue}: SettingsValueType = useSelector(selectSettingsValue)

    // useEffect(() => {
    //     if (value > maxValue) {
    //         setError('errorValue')
    //     }else if(value < maxValue && error === 'errorValue') {
    //         setError('')
    //     }
    // }, [value])


    const dispatch = useDispatch<typeof store.dispatch>()


    const changeSettingsValue = useCallback((value: number, inputName: string | undefined) => {

        if (inputName === 'min value') {
            dispatch(changeSettingMinValue(value))
        } else if (inputName === 'max value') {
            dispatch(changeSettingMaxValue(value))
        }


    }, [])

    const changeCallback = useCallback((buttonName: string | undefined) => {

        switch (buttonName) {
            case 'inc':

                return dispatch(changeValue())
            case 'reset':
                return dispatch(resetValue())
            case 'setTrue':
                return dispatch(changeSettings(true))
            case 'setFalse':
                return dispatch(changeSettings(false))
        }

    }, [])


    return (
        <div>
            {settings ? <Counter value={value} changeCallback={changeCallback}
                                 error={error}/>
                : <SettingCounter minValue={minValue} maxValue={maxValue} error={error}
                                  changeSettingsValue={changeSettingsValue} changeCallback={changeCallback}

                />}


        </div>
    );
}

export default App;
