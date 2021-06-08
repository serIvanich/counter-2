import {AppStateType} from "./store";
interface IRootState extends AppStateType{}

export const selectValue= (state: AppStateType) => {
    if (state.counter.value < state.counter.settingValue.minValue) {
        return state.counter.settingValue.minValue
    } else if (state.counter.value > state.counter.settingValue.maxValue) {
        return state.counter.settingValue.maxValue
    } else return state.counter.value

}
export const selectSettings = (state: AppStateType) => state.counter.settings
export const selectSettingValue = (state: AppStateType) => state.counter.settingValue

