import {
    ActionsType,
    ChangeSettingMaxValueType,
    ChangeSettingMinValueType, ChangeSettings,
    ChangeValueType,
    ResetValueType
} from "./action";

type SettingValueType = {
    minValue: number
    maxValue: number
}

// type InitialStateType = {
//     value: number
//     settingValue: SettingValueType,
//     settings: boolean
//     error: string
//
// }

const initialState = {

    value: 0,
    settingValue: {
        minValue: 0,
        maxValue: 0,
    } as SettingValueType,
    settings: true,
    error: '',

}

type InitialStateType = typeof initialState

type ActionType = ChangeValueType
    | ResetValueType
    | ChangeSettingMinValueType
    | ChangeSettingMaxValueType
    | ChangeSettings

export const counterReducer = (state: InitialStateType = initialState, action: ActionType) => {

    switch (action.type) {

        case ActionsType.CHANGE_VALUE:

            return {
                ...state,
                value: state.value + 1,
            }
        case ActionsType.RESET_VALUE:
            return {
                ...state,
                value: state.settingValue.minValue,
            }
        case ActionsType.CHANGE_SETTING_MIN_VALUE:

            return {

                ...state,
                settingValue: {
                    ...state.settingValue,
                    minValue: action.value
                }
            }
        case ActionsType.CHANGE_SETTING_MAX_VALUE:

            return {

                ...state,
                settingValue: {
                    ...state.settingValue,
                    maxValue: action.value
                }
            }
        case ActionsType.CHANGE_SETTINGS:
            return {
                ...state,
                settings: !action.settings
            }

        default:
            return state
    }
}


