import React from "react";
import {CounterControl} from "./CounterControl";
import {SettingsControl} from "./SettingsControl";
import {ErrorType} from "../../App";



type BoardControlPropsType = {
    error: ErrorType
    settings: boolean
    changeValue: () => void
    resetValue: () => void
    onSettings: () => void
}

export const BoardControl: React.FC<BoardControlPropsType> = ({error, settings, changeValue, onSettings, resetValue}) => {

    return settings
        ? <SettingsControl error={error} onSettings={onSettings}/>
        : <CounterControl error={error} changeValue={changeValue}
                          onSettings={onSettings} resetValue={resetValue}/>

}