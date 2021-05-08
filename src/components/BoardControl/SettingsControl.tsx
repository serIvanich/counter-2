import React, {useEffect} from "react";
import s from "./BoardControl.module.css";
import {Button} from "./Button";
import {ErrorType} from "../../App";


type SettingsControlPropsType = {
    error: ErrorType
    onSettings: () => void
}

export const SettingsControl: React.FC<SettingsControlPropsType> = ({error,onSettings}) => {


    return (
        <div className={s.buttonsContainer}>
            <Button disable={error === 'errorSettings'} name={'set'} changeCallback={onSettings}/>
        </div>
    )
}
