import {AppStateType} from "./store";
interface IRootState extends AppStateType{}

export const selectValue= (state: AppStateType) => {

    if (state.counter.value < state.counter.settingsValue.minValue) {
        return state.counter.settingsValue.minValue
    } else if (state.counter.value > state.counter.settingsValue.maxValue) {
        return state.counter.settingsValue.maxValue
    } else return state.counter.value

}
export const selectSettings = (state: AppStateType) => state.counter.settings
export const selectSettingsValue = (state: AppStateType) => state.counter.settingsValue
export const selectError = (state: AppStateType) => state.counter.error

