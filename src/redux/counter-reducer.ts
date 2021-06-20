import {
    ActionsType,
    ChangeError,
    ChangeSettingMaxValueType,
    ChangeSettingMinValueType,
    ChangeSettings,
    ChangeValueType,
    ResetValueType
} from "./action";

export type SettingsValueType = {
    minValue: number
    maxValue: number
}
export type ErrorType = '' | 'errorValue' | 'errorSettings'

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
            if (newValue > state.settingsValue.maxValue) {
                return {
                    ...state,
                    value: state.settingsValue.maxValue,
                    error: "errorValue",
                }
            } else return {
                ...state,
                value: newValue,
            }
        case ActionsType.RESET_VALUE:
            return {
                ...state,
                value: state.settingsValue.minValue,
                error: '',
            }

        case ActionsType.CHANGE_SETTING_MIN_VALUE:
            if (action.value > state.settingsValue.maxValue) {
                return {

                    ...state,
                    settingsValue: {
                        ...state.settingsValue,
                        minValue: state.settingsValue.maxValue
                    },
                    error: 'errorSettings',
                }
            } else if (state.value < state.settingsValue.minValue) {
                return {
                    ...state,
                    value: action.value,
                    settingsValue: {
                        ...state.settingsValue,
                        minValue: action.value,
                    },
                    error: '',
                }
            } else {
                return {
                    ...state,
                    settingsValue: {
                        ...state.settingsValue,
                        minValue: action.value,
                    },
                    error: '',
                }
            }

        case ActionsType.CHANGE_SETTING_MAX_VALUE:
            if (action.value < state.settingsValue.minValue) {
                return {
                    ...state,
                    settingsValue: {
                        ...state.settingsValue,
                        maxValue: state.settingsValue.minValue,
                    },
                    error: 'errorSettings',
                }
            } else {
                return {
                    ...state,
                    settingsValue: {
                        ...state.settingsValue,
                        maxValue: action.value,
                    },
                    error: '',

                }
            }
        case ActionsType.CHANGE_SETTINGS:
            if (state.settings) {
                let newValue
                if(state.value < state.settingsValue.minValue) {
                    newValue = state.settingsValue.minValue
                }else if (state.value > state.settingsValue.maxValue) {
                    newValue = state.settingsValue.maxValue
                }else {
                    newValue = state.value
                }
                return {
                    ...state,
                    value: newValue,
                    settings: action.settings,
                    error: '',
                }

            } else {
                return {
                    ...state,
                    settings: action.settings,
                    error: '',
                }
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


