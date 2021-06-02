
const initialState = {

        value: 0,
        minValue: 0,
        maxValue: 0,
        settings: false,
        error: '',

}

type InitialStateType = typeof initialState
type ActionType = ChangeValueACType | ResetValueACType
export const counterReducer = (state: InitialStateType = initialState, action: ActionType) => {

    switch(action.type) {

            case "CHANGE-VALUE":
                    return {
                            ...state,
                            value: state.value + 1,
                    }
            case 'RESET-VALUE':
                    return {
                            ...state,
                            value: 0,
                    }
            default:
                        return state
    }
}

export const changeValueAC = () => ({type: 'CHANGE-VALUE'} as const)
type ChangeValueACType = ReturnType<typeof changeValueAC>

export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
type ResetValueACType = ReturnType<typeof resetValueAC>
