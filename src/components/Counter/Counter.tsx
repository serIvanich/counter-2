import React from "react";
import style from './Counter.module.css'
import {Button} from "../general/Button";


type CounterPropsType = {
    value: number
    changeCallback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


export const Counter: React.FC<CounterPropsType> = ({value, changeCallback}) => {


    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen}`}>
                {value}
            </div>
            <div className={'buttons-group'}>
                <Button name={'inc'} disable={false} buttonName='inc' changeCallback={changeCallback}/>
                <Button name={'reset'} disable={false} buttonName='reset' changeCallback={changeCallback}/>
                <Button name={'set'} disable={false} buttonName='setTrue' changeCallback={changeCallback}/>
            </div>

        </div>
    )
}
