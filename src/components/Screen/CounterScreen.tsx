import React from "react";
import s from "./Screen.module.css";
import {ErrorType} from "../../App";

type CounterScreenPropsType = {
    error: ErrorType
    value: number
}

export const CounterScreen: React.FC<CounterScreenPropsType> = ({error, value}) => {
const isError = error === 'errorValue' ? s.error:''
    return(
        <div className={s.screenContainer + ' ' + s.screenCounter+' '+isError}>{value}</div>
    )
}