
export  enum ActionsType {
    CHANGE_VALUE = 'CHANGE-VALUE',
    RESET_VALUE = 'RESET-VALUE',
    CHANGE_SETTING_MIN_VALUE = 'CHANGE-SETTING-MIN-VALUE',
    CHANGE_SETTING_MAX_VALUE = 'CHANGE-SETTING-MAX-VALUE',
    CHANGE_SETTINGS = 'CHANGE-SETTINGS'
}


export const changeValue = () => ({type: ActionsType.CHANGE_VALUE} as const)
export type ChangeValueType = ReturnType<typeof changeValue>

export const resetValue = () => ({type: ActionsType.RESET_VALUE} as const)
export type ResetValueType = ReturnType<typeof resetValue>

export const changeSettingMinValue = (value: number) => ({
    type: ActionsType.CHANGE_SETTING_MIN_VALUE,
    value
} as const)
export type ChangeSettingMinValueType = ReturnType<typeof changeSettingMinValue>

export const changeSettingMaxValue = (value: number) => ({
    type: ActionsType.CHANGE_SETTING_MAX_VALUE,
    value
} as const)
export type ChangeSettingMaxValueType = ReturnType<typeof changeSettingMaxValue>

export const changeSettings = (settings: boolean) => ({
    type: ActionsType.CHANGE_SETTINGS,
    settings
} as const)
export type ChangeSettings = ReturnType<typeof changeSettings>
