import {
    ActionsType, ChangeError,
    ChangeSettingMaxValueType,
    ChangeSettingMinValueType, ChangeSettings,
    ChangeValueType,
    ResetValueType
} from "./action";

export type SettingsValueType = {
    minValue: number
    maxValue: number
}
export type ErrorType = '' | 'errorValue' | 'errorSettings'
// export type InitialStateType = {
//     value: number
//     settings: boolean
//     error: ErrorType
//
// }

const initialState = {

    value: 0,
    settingsValue: {
        minValue: 0,
        maxValue: 5,
    } as SettingsValueType,
    settings: true,
    error: '' as ErrorType,

}

export type InitialStateType = typeof initialState

export type ActionType = ChangeValueType
    | ResetValueType
    | ChangeSettingMinValueType
    | ChangeSettingMaxValueType
    | ChangeSettings
    | ChangeError

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {

        case ActionsType.CHANGE_VALUE:
            const newValue = state.value + 1
            return {
                ...state,
                value: newValue,
            }
        case ActionsType.RESET_VALUE:
            return {
                ...state,
                value: state.settingsValue.minValue,
            }

        case ActionsType.CHANGE_SETTING_MIN_VALUE:
            if (action.value > state.settingsValue.maxValue) {
                return {

                    ...state,
                    settingsValue: {
                        ...state.settingsValue,
                        minValue: state.settingsValue.maxValue
                    }
                }
            } else {
                return {
                    ...state,
                    settingsValue: {
                        ...state.settingsValue,
                        minValue: action.value
                    }
                }

            }
        case ActionsType.CHANGE_SETTING_MAX_VALUE:

            return {
                ...state,
                settingsValue: {
                    ...state.settingsValue,
                    maxValue: action.value
                }

            }
        case ActionsType.CHANGE_SETTINGS:
            return {
                ...state,
                settings: !action.settings
            }
        case ActionsType.CHANGE_ERROR:
            return {
                ...state,
                error: action.error
            }


        default:
            return state
    }
}


