import React from "react";
import s from "./BoardControl.module.css";
import {Button} from "./Button";
import {ErrorType} from "../../App";

type CounterControlPropsType = {
    error: ErrorType
    changeValue: () => void
    resetValue: () => void
    onSettings: () => void
}

export const CounterControl: React.FC<CounterControlPropsType> = ({error, changeValue, onSettings, resetValue}) => {

    return (
        <div className={s.buttonsContainer}>
            <Button disable={error === 'errorValue'} name={'inc'} changeCallback={changeValue}/>
            <Button disable={false} name={'reset'} changeCallback={resetValue}/>
            <Button disable={false} name={'set'} changeCallback={onSettings}/>
        </div>
    )
}
