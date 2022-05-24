import React, {ChangeEvent, useEffect} from "react";
import style from './SettingCounter.module.css'
import {Button} from "../general/Button";
import {ErrorType} from "../../redux/counter-reducer";


type SettingCounterPropsType = {
    minValue: number
    maxValue: number
    error: ErrorType
    changeSettingsValue: (value: number, inputName: string | undefined) => void
    changeCallback: (buttonName: string | undefined) => void
}

export const SettingCounter: React.FC<SettingCounterPropsType> = React.memo(({
         minValue, maxValue, error,changeSettingsValue, changeCallback
    }) => {

   
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        
        changeSettingsValue(Number(e.currentTarget.value), e.currentTarget.dataset.input_name)
    }
    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen} ${error ? style.settingsValueError : ''}`}>
            
                <InputBlock title={'starting value:'} value={minValue} dataInputName={'min value'}
                           onChangeValue={onChangeValue}/>
                <InputBlock title={'finish value:'} value={maxValue} dataInputName={'max value'}
                           onChangeValue={onChangeValue}/>
             
            </div>
            <div className={'buttons-group'}>
                <Button name={'set'} changeCallback={changeCallback} buttonName='setFalse' disable={false}/>
            </div>

        </div>
    )
})

const InputBlock: React.FC<InputBlockPropsType> = ({title, value, dataInputName, onChangeValue}) => {

    return <div className={style.inputContainer}>
        <span>{title}</span>
        <input value={value} type={'number'} placeholder={'step=1'}
            data-input_name={dataInputName} onChange={onChangeValue}
            className={style.input}/>
    </div>
}

type InputBlockPropsType = {
    title: string
    value: number
    dataInputName: string
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
}
