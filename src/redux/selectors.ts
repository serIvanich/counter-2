import {AppStateType} from "./store";

export const selectValue= (state: AppStateType) => state.counter.value
export const selectSettings = (state: AppStateType) => state.counter.settings
export const selectSettingsValue = (state: AppStateType) => state.counter.settingsValue
export const selectError = (state: AppStateType) => state.counter.error

