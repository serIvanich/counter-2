import React, {ChangeEvent, FormEvent} from "react";
import style from './SettingCounter.module.css'
import {Button} from "../general/Button";

type SettingCounterPropsType = {
    minValue: number
    maxValue: number
    changeSettingsValue : (e: ChangeEvent<HTMLInputElement>) => void
    changeCallback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const SettingCounter: React.FC<SettingCounterPropsType> = React.memo(({minValue, maxValue,
                                                                      changeSettingsValue, changeCallback}) => {

    const onChangeSettingsValue = (e: ChangeEvent<HTMLInputElement>) =>
        changeSettingsValue(e)

    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen}`}>
                <div>
                    min value: <input  value={minValue} type={'number'} data-input_name='min value'
                                      onChange={(e) => onChangeSettingsValue(e)}
                                      className={style.input}/>
                </div>
               <div>
                    max value: <input value={maxValue} type={'number'} placeholder={'step 1'} data-input_name='max value'
                                      onChange={(e) => onChangeSettingsValue(e)}
                                      className={style.input}/>
                </div>

            </div>
            <div className={'buttons-group'}>
                <Button name={'set'} changeCallback={changeCallback} buttonName='setFalse' disable={false} />
            </div>

        </div>
    )
})
