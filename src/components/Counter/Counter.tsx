import React from "react";
import style from './Counter.module.css'
import {Button} from "../general/Button";
import {ErrorType} from "../../App";


type CounterPropsType = {
    value: number
    error: ErrorType

    changeCallback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


export const Counter: React.FC<CounterPropsType> = ({value, error, changeCallback}) => {


    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen} ${error==='errorValue'?style.counterValueError:''}`}>
                {value}
            </div>
            <div className={'buttons-group'}>
                <Button name={'inc'} disable={error==='errorValue'} buttonName='inc' changeCallback={changeCallback}/>
                <Button name={'reset'} disable={false} buttonName='reset' changeCallback={changeCallback}/>
                <Button name={'set'} disable={false} buttonName='setTrue' changeCallback={changeCallback}/>
            </div>

        </div>
    )
}
