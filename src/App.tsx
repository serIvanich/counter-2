import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectSettings, selectSettingsValue, selectValue} from "./redux/selectors";
import {changeSettingMaxValue, changeSettingMinValue, changeSettings, changeValue, resetValue} from "./redux/action";
import {store} from "./redux/store";
import {ErrorType, SettingsValueType} from "./redux/counter-reducer";


function App() {

    const value: number = useSelector(selectValue)

    const settings: boolean = useSelector(selectSettings)
    const error: ErrorType = useSelector(selectError)
    const {minValue, maxValue}: SettingsValueType = useSelector(selectSettingsValue)

    const dispatch = useDispatch<typeof store.dispatch>()


    const changeSettingsValue = (value: number, inputName: string | undefined) => {

        if (inputName === 'min value') {
            dispatch(changeSettingMinValue(value))
        } else if (inputName === 'max value') {
            dispatch(changeSettingMaxValue(value))
        }
    }

    const changeCallback = (buttonName: string | undefined) => {

        switch (buttonName) {
            case 'inc':

                return dispatch(changeValue())
            case 'reset':
                return dispatch(resetValue())
            case 'setTrue':
                return dispatch(changeSettings(true))
            case 'setFalse':
                return dispatch(changeSettings(false))
        }

    }


    return (
        <div>
            {!settings ? <Counter value={value} changeCallback={changeCallback}
                                  error={error}/>
                : <SettingCounter minValue={minValue} maxValue={maxValue} error={error}
                                  changeSettingsValue={changeSettingsValue} changeCallback={changeCallback}

                />}


        </div>
    );
}

export default App;
