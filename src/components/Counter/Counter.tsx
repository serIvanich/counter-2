import React from "react";
import style from './Counter.module.css'
import {Button} from "../BoardControl/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeSettings, changeValue, resetValue} from "../../redux/action";
import s from "../Screen/Screen.module.css";
import {selectValue} from "../../redux/selectors";


type CounterPropsType = {
    changeSettings: (settings: boolean) => void
}


export const Counter: React.FC = () => {

    const value = useSelector(selectValue)


    const dispatch = useDispatch()

    const onChangeValue = () => {

        dispatch(changeValue())
    }
    const onResetValue = () => {
        dispatch(resetValue())
    }
const onChangeSettings = () => {
        dispatch(changeSettings(true))
    }

    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen}`}>
                {value}
            </div>
            <div className={'buttons-group'}>
                <Button name={'inc'} disable={false} changeCallback={onChangeValue}/>
                <Button name={'reset'} disable={false} changeCallback={onResetValue}/>
                <Button name={'set'} disable={false} changeCallback={onChangeSettings}/>
            </div>

        </div>
    )
}
