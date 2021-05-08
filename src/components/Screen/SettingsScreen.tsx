import React, {ChangeEvent} from "react";
import s from "./Screen.module.css";
import {ErrorType} from "../../App";

type SettingsScreenPropsType = {
    error: ErrorType
    minValue: number
    maxValue: number
    changeMinValue: (value: number) => void
    changeMaxValue: (value: number) => void

}

export const SettingsScreen: React.FC<SettingsScreenPropsType> = ({error,minValue, maxValue,
                                                                      changeMinValue,changeMaxValue}) => {
const updateMin = (e: ChangeEvent<HTMLInputElement>) => {
    changeMinValue(+e.currentTarget.value)
}
const updateMax = (e: ChangeEvent<HTMLInputElement>) => {
    changeMaxValue(+e.currentTarget.value)
}
const errorClass = error === 'errorSettings'? s.errorMaxInput  : ''

    return(
        <div className={s.screenContainer+ ' '+ s.settingsScreen + ' ' + errorClass }>
            <div className={s.inputContainer}>
                max value : <input className={s.inputSettingsValue + ' ' + errorClass}
                                   type='number' value={maxValue} onChange={updateMax}/>

            </div>
            <div className={s.inputContainer}>
                start value : <input className={s.inputSettingsValue + ' ' + errorClass}
                                     type='number' value={minValue} onChange={updateMin}/>

            </div>
        </div>
    )
}