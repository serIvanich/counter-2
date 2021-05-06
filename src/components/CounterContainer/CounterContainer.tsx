import s from './CounterContainer.module.css'
import React from "react";
import {Button} from "../Button";

type CounterContainerPropsType = {
value: number
    changeValue: () => void
    changeSettings: () => void

}
export const CounterContainer: React.FC<CounterContainerPropsType> = ({value, changeValue, changeSettings}) => {

    const changeCountValue = () => changeValue()
    const changeCountSettings = () => changeSettings()

    return (
        <div className={s.container}>
            <div className={s.tablo}>
                {value}
            </div>
            <Button name={'inc'} changeCallback={changeCountValue}/>
            <Button name={'settings'}  changeCallback={changeCountSettings}/>


        </div>
    )
}