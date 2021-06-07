import {AppStateType} from "./store";
interface IRootState extends AppStateType{}

export const selectValue= (state: IRootState) => {
    if (state.counter.value < state.counter.settingValue.minValue) {
        return state.counter.settingValue.minValue
    } else {return state.counter.value}
}
export const selectSettings = (state: IRootState) => state.counter.settings
export const selectSettingValue = (state: IRootState) => state.counter.settingValue

