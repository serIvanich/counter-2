import React from "react";
import s from './Counter.module.css'
import {Button} from "./Button";

type ButtonsContainerPropsType = {
    settings: boolean
    changeValue: () => void
    resetValue: () => void
    onSettings: () => void
}

export const ButtonsContainer: React.FC<ButtonsContainerPropsType> = ({settings, changeValue, onSettings, resetValue}) => {

     return settings
         ? <div className={s.buttonsContainer}>
             <Button name={'set'} changeCallback={onSettings}/>
         </div>
         : <div className={s.buttonsContainer}>
             <Button name={'inc'} changeCallback={changeValue} />
             <Button name={'reset'} changeCallback={resetValue} />
             <Button name={'set'} changeCallback={onSettings} />
         </div>

}