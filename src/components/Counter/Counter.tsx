import React from "react";
import style from './Counter.module.css'
import {Button} from "../BoardControl/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {changeValueAC, resetValueAC} from "../../bll/counter-reducer";

type CounterPropsType = {
    changeSettings: (settings: boolean) => void
}


export const Counter: React.FC<CounterPropsType> = ({changeSettings}) => {

    const value = useSelector((state: AppStateType) => state.counter.value)
    const dispatch = useDispatch()
    const changeValue = () => {

        dispatch(changeValueAC())
    }
    const resetValue = () => {

        dispatch(resetValueAC())
    }

    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen}`}>
                {value}
            </div>
            <div className={'buttons-group'}>
                <Button name={'inc'} disable={false} changeCallback={changeValue}/>
                <Button name={'reset'} disable={false} changeCallback={resetValue}/>
                <Button name={'set'} disable={false} changeCallback={() => changeSettings(false)}/>
            </div>

        </div>
    )
}
