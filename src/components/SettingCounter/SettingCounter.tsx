import React, {ChangeEvent} from "react";
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
                                                                                 minValue, maxValue, error,
                                                                                 changeSettingsValue, changeCallback
                                                                             }) => {

    const onChangeSettingsValue = (e: ChangeEvent<HTMLInputElement>) =>
        changeSettingsValue(Number(e.currentTarget.value), e.currentTarget.dataset.input_name)

    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen} ${error ? style.settingsValueError : ''}`}>
                <div className={style.inputContainer}>
                    <span>starting value:</span>
                    <input value={minValue} type={'number'} data-input_name='min value'
                           onChange={(e) => onChangeSettingsValue(e)}
                           className={style.input}/>
                </div>
                <div className={style.inputContainer}>
                    <span>finish value:</span>
                    <input value={maxValue} type={'number'} placeholder={'step 1'}
                           data-input_name='max value'
                           onChange={(e) => onChangeSettingsValue(e)}
                           className={style.input}/>
                </div>

            </div>
            <div className={'buttons-group'}>
                <Button name={'set'} changeCallback={changeCallback} buttonName='setFalse' disable={false}/>
            </div>

        </div>
    )
})
