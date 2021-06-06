import {
    ActionsType,
    ChangeSettingMaxValueType,
    ChangeSettingMinValueType, ChangeSettings,
    ChangeValueType,
    ResetValueType
} from "./action";

const initialState = {

    value: 0,
    settingValue: {
        minValue: 0,
        maxValue: 0,
    } as { minValue: number, maxValue: number },
    settings: false,
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
                value: 0,
            }
        case ActionsType.CHANGE_SETTING_MIN_VALUE:
            return {
                ...state,
                settingValue: {
                    ...state.settingValue,
                    minValue: action.value
                }
            }
        case ActionsType.CHANGE_SETTINGS:
            return {
                ...state,
                settings: action.settings
            }

        default:

            return state
    }
}


