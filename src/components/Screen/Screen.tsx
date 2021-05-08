import React from "react";
import {SettingsScreen} from "./SettingsScreen";
import {CounterScreen} from "./CounterScreen";
import {ErrorType} from "../../App";



type ScreenPropsType = {
    error: ErrorType
    settings: boolean
    value: number
    minValue: number
    maxValue: number
    changeMinValue: (value: number) => void
    changeMaxValue: (value: number) => void
}

export const Screen: React.FC<ScreenPropsType> = ({error, settings, value,
                                                      minValue, maxValue,
                                                      changeMinValue,changeMaxValue
}) => {

    return settings
        ? <SettingsScreen error={error} minValue={minValue} maxValue={maxValue}
                          changeMinValue={changeMinValue} changeMaxValue={changeMaxValue}/>
        : <CounterScreen error={error} value={value}/>
}