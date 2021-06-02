import React from "react";
import style from './SettingCounter.module.css'
import {Button} from "../BoardControl/Button";

type SettingCounterPropsType = {
    changeSettings: (settings: boolean) => void
}
export const SettingCounter: React.FC<SettingCounterPropsType> = ({changeSettings}) => {

    return (
        <div className={'Counter-Container'}>
            <div className={`screen-group ${style.counterScreen}`}>
                <div>
                    min value: <input type={'number'} className={style.input}/>
                </div>
               <div>
                    max value: <input type={'number'} className={style.input}/>
                </div>

            </div>
            <div className={'buttons-group'}>
                <Button name={'set'} changeCallback={() => changeSettings(true)} disable={false} />
            </div>

        </div>
    )
}
